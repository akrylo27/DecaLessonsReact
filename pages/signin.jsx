import Head from 'next/head';
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from 'react';

export default function SignIn() {
  const { data: session, status } = useSession()
  const [login, setLogin] = useState('')
  const [passsword, setPassword] = useState('')

  const changeLogin = (e) => {
    setLogin(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const loginIn = (e) => {
    signIn("credentials", {
      identifier: login,
      password: passsword,
      redirect: false,
    })

    setLogin('')
    setPassword('')
  }

  useEffect(() => {
    if (session) {
      handle()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <input type="text" placeholder='login' value={login} onChange={changeLogin} />
        <input type="password" placeholder='pass' value={passsword} onChange={changePassword} />
        <button onClick={loginIn}>
          Sign In
        </button>
      </div>
    </>
  )
}
