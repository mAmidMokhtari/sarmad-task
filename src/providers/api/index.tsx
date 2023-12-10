import { FC } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IApiProviderProps {
  children?: JSX.Element;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const ApiProvider: FC<IApiProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ApiProvider;
