import React from 'react';
import Link from 'next/link';

function Navbar(props) {
  return (
    <div>
      <ul className='nav-list-main'>
        <Link className='nav-item' href='/mainpage'>
          Главная
        </Link>
        <Link className='nav-item' href='/#'>
          Топ-чарты
        </Link>
        <Link className='nav-item' href='/categories'>
          Категории
        </Link>
        <Link className='nav-item' href='/genres'>
          Жанры
        </Link>
        <Link className='nav-item' href='/#'>
          Релизы
        </Link>
        <Link className='nav-item' href='/podcasts'>
          Подкасты
        </Link>
        <Link className='nav-item' href='/books'>
          Книги
        </Link>
        <Link className='nav-item' href='/#'>
          Мои плейлисты
        </Link>
        <Link className='nav-item' href='/#'>
          Мне нравится
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
