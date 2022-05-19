import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../app/assets/styles/globals.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
