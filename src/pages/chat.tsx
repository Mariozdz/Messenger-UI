import type { NextPage } from "next";
import { ChatLayout } from "src/components/layouts/home/chat-layout";

interface HomePageProps {
  userData: {
    Number: string;
    Zone: string;
    state: string;
    username: String;
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

export default function Page({ userData, groups }: HomePageProps) {
  console.log(userData);
  console.log(groups);

  return <ChatLayout />;
}

export async function getServerSideProps() {
  //   const user = await fetch(`http://localhost:8080/User/+506/60032274`, {
  //     method: "GET",
  //     // headers: {
  //     //   "X-RapidAPI-Key": "your-rapidapi-key",
  //     //   "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  //     // },
  //   });

  //   const groups = await fetch("http://localhost:8080/Groups/+506/60032274");

  // const userData = await user.json();
  // const grupsData = await groups.json();

  return {
    props: {
      userData: {
        Number: "number",
        Zone: "number",
        state: "state",
        username: "username",
      },
      groups: [],
    },
  };
}
