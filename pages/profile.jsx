import { signOut } from "next-auth/react"

const profile = () => {
  const handle = () => {
    signOut({
      redirect: false
    })
  }

  return (
    <div className='container'>
      <button onClick={handle}>Log Out</button>
    </div>
  );
};

export default profile;
