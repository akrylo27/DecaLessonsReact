import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
// import Registration from '@/ui/components/Form/Registration';

export const getServerSideProps = async ({ req, res }) => {
  const sessionServer = await getServerSession(req, res, authOptions)

  if (sessionServer) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionServer
    }
  }
}

export default function SignUp() {
  return (
    <>
      <div className='container'>
        {/* <Registration /> */}
        reg
      </div>
    </>
  );
}
