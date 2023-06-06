import { useStoreActions } from "../../../../../shared/hooks/store-hook";
import { useState } from "react";
import { useRouter } from "next/router";

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

    setUser({ phoneNumber });
    setToken({ token: "" });

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
