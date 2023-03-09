import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/Button.scss';

import Layout from '../ui/components/global/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
