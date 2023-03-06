import React from 'react';

function Navbar(props) {
  return (
    <div>
      <ul className='nav-list-main'>
        <li className='nav-item'>Домой</li>
        <li className='nav-item'>Топ-чарты</li>
        <li className='nav-item'>Категории</li>
        <li className='nav-item'>Жанры</li>
        <li className='nav-item'>Релизы</li>
        <li className='nav-item'>Подкасты</li>
        <li className='nav-item'>Книги</li>
        <li className='nav-item'>Мой плейлист</li>
        <li className='nav-item'>Мне нравится</li>
      </ul>
    </div>
  );
}

export default Navbar;
