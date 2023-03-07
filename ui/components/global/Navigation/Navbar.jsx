import React from 'react';
import Link from 'next/link';

function Navbar(props) {
  return (
    <div>
      <nav className='nav-main'>
        <div className='nav-list-main'>
          <Link className='nav-list-item' href='/mainpage'>
            Главная
          </Link>
          <Link className='nav-list-item' href='/#'>
            Топ-чарты
          </Link>
          <Link className='nav-list-item' href='/#'>
            Релизы
          </Link>
          <Link className='nav-list-item' href='/categories'>
            Категории
          </Link>
          <Link className='nav-list-item' href='/genres'>
            Жанры
          </Link>
          <Link className='nav-list-item' href='/podcasts'>
            Подкасты
          </Link>
          <Link className='nav-list-item' href='/books'>
            Книги
          </Link>
          <Link className='nav-list-item' href='/#'>
            Мои плейлисты
          </Link>
          <Link className='nav-list-item' href='/#'>
            Мне нравится
          </Link>
        </div>
        <div className='link-wrapper'>
          <Link href='/signin'>Войти</Link>
          <Link href='/signup'>Регистрация</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
