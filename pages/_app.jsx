import { Roboto } from '@next/font/google'
import { SessionProvider } from "next-auth/react"

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
})

import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/Button.scss';

import Layout from '../ui/components/global/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  console.log( 'test', session )

  return (
    <SessionProvider session={session}>
      <div className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  );
}
