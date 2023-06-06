export default function Page() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
    props: {},
  };
}
