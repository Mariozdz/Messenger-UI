import { GetServerSideProps } from "next";
import { useStoreState } from "../hooks/store-hook";

export function withServerAuth(gssp: GetServerSideProps): GetServerSideProps {
  return async (context) => {
    const { token } = useStoreState((state) => state.session);

    if (!token) {
      return {
        redirect: { statusCode: 302, destination: "/login" },
      };
    }

    const gsspData = await gssp(context);

    if (!("props" in gsspData)) {
      throw new Error("invalid getSSP result");
    }

    return {
      props: {
        ...gsspData.props,
      },
    };
  };
}
