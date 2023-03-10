import Registration from '@/ui/components/Form/Registration';
import Authorization from '@/ui/components/Form/Authorization';

export default function SignIn() {
  const user = {
    name: '',
    password: '',
    email: true,
  };

  return user.email ? <Authorization /> : <Registration />;
}
