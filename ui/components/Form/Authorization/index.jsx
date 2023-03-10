import { useState } from 'react';
import Input from '@/ui/components/Form/Input';
import Checkbox from '@/ui/components/Form/Checkbox';
import Button from '@/ui/components/Form/Button';
import Link from 'next/link';
import { fetchAPI } from '@/utils/api/fetch';
import { useRouter } from 'next/router';

function Authorization(props) {
  const [isIdentifier, setisIdentifier] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const handleChangeValue = (event) => {
    setisIdentifier(event.target.value);
  };
  const handleChangePassword = (event) => {
    setIsPassword(event.target.value);
  };

  const handleChecked = (event) => {
    setChecked(!checked);
  };

  const auth = (e) => {
    e.preventDefault();

    const parms = {
      identifier: isIdentifier,
      password: isPassword,
    };

    fetchAPI(`auth/local`, 'POST', parms)
      .then(async (response) => {
        const { error, jwt, user } = await response.json();
        if (error) {
          setError(error.message);
          console.log(error.message);
        } else if (response.ok) {
          const savedJWT = JSON.parse(localStorage.getItem('jwt'));
          if (savedJWT == null) {
            localStorage.setItem('jwt', JSON.stringify(jwt));
            router.push('/');
          } else {
            setError('JWT have alredy saved');
            console.log('JWT have alredy saved');
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className={'form-wrapper'} onSubmit={auth}>
      <h2 className='form-header'>Войти</h2>
      <h2 className={'form-error'}>{error}</h2>

      <Input
        type={'text'}
        placeholder={'Введите имя *'}
        size={'xg'}
        variant={'outlined'}
        value={isIdentifier}
        onChange={handleChangeValue}
        required
      />
      <Input
        type={'password'}
        placeholder={'Пароль *'}
        size={'xg'}
        variant={'outlined'}
        value={isPassword}
        onChange={handleChangePassword}
        required
      />
      <Checkbox
        type={'checkbox'}
        color={'info'}
        checked={checked}
        onChange={handleChecked}
        size={'md'}
        text={'Запомнить меня'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
        text={'Войти'}
      />
      <div className='forget-password'>
        <span>
          <a href='#'>Забыли пароль?</a>
        </span>
        <p>
          Нет аккаунта?
          <Link href='/signup'>Зарегистрироваться</Link>
        </p>
      </div>
    </form>
  );
}

export default Authorization;
