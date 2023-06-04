import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
//To Cash The Data
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
