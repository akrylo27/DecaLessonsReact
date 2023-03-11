import Head from 'next/head';

import Authorization from '@/ui/components/Form/Authorization';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <Authorization />
      </div>
    </>
  )
}
