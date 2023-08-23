import { useStoreActions } from "../../../../../shared/hooks/store-hook";
import { useState } from "react";
import { useRouter } from "next/router";
import { IUser } from "../../../../../shared/types/i-user";

interface UseLoginFormHook {
  handleOnSubmit: (event: any) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  setPassword: (value: string) => void;
  password: string;
}

export function useLoginForm(): UseLoginFormHook {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { setUser } = useStoreActions((actions) => actions.user);
  const { setToken } = useStoreActions((actions) => actions.session);

  async function handleOnSubmit(event: any) {
    event.preventDefault();

    const result = await fetch(`http://localhost:8080/User/Login`, {
      method: "POST",
      body: JSON.stringify({
        number: "60032274",
        zone: "+506",
        password: "Br4zz4",
      }),
    }).then((response) => response.json());

    const userRequestResult = await fetch(
      `http://localhost:8080/User/+506/60032274`,
      {
        method: "GET",
      }
    ).then((response) => response.json());

    const userData: IUser = {
      phoneNumber: userRequestResult?.number,
      zoneCode: userRequestResult?.zone,
      state: userRequestResult?.state,
      userName: userRequestResult?.username,
      url: userRequestResult?.url,
    };

    setUser(userData);

    setToken({ token: result?.token });

    await router.push(`/chat?phoneNumber=${phoneNumber}`, "/chat");
  }

  return {
    handleOnSubmit,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
  };
}
