import { signOut } from "next-auth/react"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useRouter } from "next/router";

// export async function getServerSideProps({req, res}) {
//   const session = await getServerSession(req, res, authOptions)

//   console.log('session server', session)

//   // if (!session) {
//   //   return {
//   //     redirect: {
//   //       destination: '/',
//   //       permanent: false,
//   //     },
//   //   }
//   // }

//   return {
//     props: {
//       session,
//     },
//   }
// }

const profile = ({session}) => {  
  const router = useRouter();

  const handle = async () => {
    const { url } = await signOut({redirect: false, callbackUrl: "/"})
    router.push(url)
  }

  return (
    <div className='container'>
      <button onClick={() => handle()}>Log Out</button>
    </div>
  );
};

export default profile;
