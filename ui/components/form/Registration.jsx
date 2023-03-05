import React, { useState } from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

function Registration({ value, type }) {
  const [isValue, setIsValue] = useState(value);
  const [password, setPassword] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleChangeValue = (event) => {
    console.log(event.target.value);
    setIsValue(event.target.value);
  };
  const handleChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleChecked = (event) => {
    console.log(event.target.value);
    setChecked(!checked);
  };
  return (
    <form className={'registration-position'}>
      <Input
        type={'text'}
        placeholder={'Введите имя *'}
        size={'xl'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChangeValue}
      />
      <Input
        type={'password'}
        placeholder={'Пароль *'}
        size={'xl'}
        variant={'outlined'}
        value={password}
        onChange={handleChangePassword}
      />
      <Checkbox
        type={'checkbox'}
        color={'info'}
        checked={checked}
        onChange={handleChecked}
        size={'md'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
      />
      <div className='forget-password'>
        <span>
          <a href='#'>Забыли пароль?</a>
        </span>
        <span>
          <p>
            Нет аккаунта? <a href='#'>Зарегистрироваться</a>
          </p>
        </span>
      </div>
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
