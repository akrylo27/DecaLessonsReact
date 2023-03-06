import Registration from '@/ui/components/form/Registration';
import Authorization from '@/ui/components/form/Authorization';

export default function SignIn() {
  const user = {
    name: '',
    password: '',
    email: true,
  };

  return user.email ? <Authorization /> : <Registration />;
}
