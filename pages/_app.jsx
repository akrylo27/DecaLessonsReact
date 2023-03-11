import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
})

import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/Button.scss';

import Layout from '../ui/components/global/Layout';

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
