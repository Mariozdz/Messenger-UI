import { ChatLayout } from "src/components/layouts/home/chat-layout";
import { IGroup } from "../shared/types/i-group";

interface HomePageProps {
  groups: IGroup;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Page({ groups }: HomePageProps) {
  return <ChatLayout groups={groups} />;
}

export async function getServerSideProps(context: any) {
  const { phoneNumber } = context.query;

  let groups;

  try {
    groups = await fetch("http://localhost:8080/Groups/+506/60032274").then(
      (data) => data.json()
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: {
      userData: {
        Number: phoneNumber || "",
        Zone: "number",
        state: "state",
        username: "username",
      },
      groups: groups,
    },
  };
}
