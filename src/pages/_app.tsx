import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider, useStoreRehydrated } from "easy-peasy";
import { store } from "src/stores";

const queryClient = new QueryClient();

function WaitForStateRehydration({ children }: { children: any }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WaitForStateRehydration>
    </StoreProvider>
  );
}

export default MyApp;
