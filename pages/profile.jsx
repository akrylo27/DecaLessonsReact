import { signOut } from "next-auth/react"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

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
  const handle = () => {
    signOut({
      redirect: false
    })
  }

  return (
    <div className='container'>
      <button onClick={() => handle()}>Log Out</button>
    </div>
  );
};

export default profile;
