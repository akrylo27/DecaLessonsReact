import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Checkbox from '../Checkbox';
import Button from '../Button';

import styles from '@/ui/components/Form/Registration/Registration.module.scss';

function Registration(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

  const handleChangeValue = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChecked = (event) => {
    console.log(event.target.value);
    setChecked(!checked);
  };

  const regs = (e) => {
    e.preventDefault();

    const parms = {
      username: name,
      email: email,
      password: password,
    };

    fetch(`${API_URL}/auth/local/register`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parms),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className={styles.form_wrapper} onSubmit={regs}>
      <h2 className={styles.form_header}>Регистрация</h2>
      <Input
        type={'text'}
        placeholder={'Введите имя *'}
        size={'xg'}
        variant={'outlined'}
        value={name}
        onChange={handleChangeValue}
      />
      <Input
        type={'text'}
        placeholder={'Введите email *'}
        size={'xg'}
        variant={'outlined'}
        value={email}
        onChange={handleChangeEmail}
      />
      <Input
        type={'password'}
        placeholder={'Пароль *'}
        size={'xg'}
        variant={'outlined'}
        value={password}
        onChange={handleChangePassword}
      />
      <Input
        type={'password'}
        placeholder={'Подтвердите пароль *'}
        size={'xg'}
        variant={'outlined'}
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
      <Checkbox
        type={'checkbox'}
        color={'info'}
        checked={checked}
        onChange={handleChecked}
        size={'md'}
        text={'Подтверждаю обработку персональных данных'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
        text={'Зарегистрироваться'}
      />

      <>
        {/* Шаблоны */}
        {/* Input */}
        {/*       <Label color={'success'} text={'Успешно'} size={'xg'} />
      <Input
        type={type}
        placeholder={'Введите текст'}
        color={'success'}
        size={'xg'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChange}
      /> */}
        {/*    <Label color={'primary'} text={'Обязательно'} size={'lg'} />
      <Input
        type={type}
        placeholder={'Введите текст'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChange}
      /> */}
        {/* <Label color={'warning'} text={'Предупреждение'} size={'sm'} />
      <Input
        type={type}
        placeholder={'Введите текст'}
        color={'warning'}
        size={'sm'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChange}
      />
 */}
        {/* Checkbox */}
        {/* <div className='checkbox-wrapper'>
        <Checkbox
          type={'checkbox'}
          color={'success'}
          checked={checked}
          onChange={handleChecked}
        />
        <Label color={'info'} text={'checkbox'} size={'sm'} />
      </div>
      <div className='checkbox-wrapper'>
        <Checkbox type={'radio'} color={'info'} />
        <Label color={'info'} text={'radio'} size={'sm'} />
        <Checkbox type={'radio'} color={'info'} />
        <Label color={'info'} text={'radio'} size={'sm'} />
      </div>

      <Button
        type={'submit'}
        color={'success'}
        size={'xg'}
        variant={'outlined'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
      />

      <Button type={'submit'} color={'info'} size={'md'} variant={'outlined'} />
      <Button
        type={'submit'}
        color={'warning'}
        size={'sm'}
        variant={'outlined'}
      /> */}
      </>
    </form>
  );
}

export default Registration;
