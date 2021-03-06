import type { AppProps } from 'next/app';
import { OverlayProvider } from '@react-aria/overlays';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'store';

import 'leaflet/dist/leaflet.css';
import 'styles/globals.css';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </Hydrate>
    </QueryClientProvider>
  </ReduxProvider>
);

export default MyApp;
