import { ChatLayout } from "src/components/layouts/home/chat-layout";

interface HomePageProps {
  userData: {
    Number: string;
    Zone: string;
    state: string;
    username: string;
  };
  groups: {
    members: [];
    groupName: string;
    description: string;
    isChat: boolean;
    id: string;
    admins: [];
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Page({ userData, groups }: HomePageProps) {
  return <ChatLayout />;
}

export async function getServerSideProps(context: any) {
  const { phoneNumber } = context.query;

  //   const user = await fetch(`http://localhost:8080/User/+506/60032274`, {
  //     method: "GET",
  //     // headers: {
  //     //   "X-RapidAPI-Key": "your-rapidapi-key",
  //     //   "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  //     // },
  //   });

  //   const groups = await fetch("http://localhost:8080/Groups/+506/60032274");

  // const userData = await user.json();
  // const groupsData = await groups.json();

  return {
    props: {
      userData: {
        Number: phoneNumber || "",
        Zone: "number",
        state: "state",
        username: "username",
      },
      groups: [],
    },
  };
}
