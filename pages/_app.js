import { Provider } from "react-redux";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../redux/store";
//To Cash The Data
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
