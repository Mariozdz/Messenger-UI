import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useStoreState } from "../hooks/store-hook";

const PublicRoutes = ["/login"];

export const withClientAuth = <T extends object>(
  Component: React.ComponentType<T>
) => {
  const AuthenticatedComponent = (props: T) => {
    const router = useRouter();

    const { token } = useStoreState((state) => state.session);

    useEffect(() => {
      if (!token && !PublicRoutes.includes(router.route)) {
        router.push("/login").then(() => {});
      }
    }, []);

    return <Component {...(props as T)} />;
  };

  return AuthenticatedComponent;
};
