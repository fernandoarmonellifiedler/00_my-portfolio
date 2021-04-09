import React from 'react';

function Lateral({ categorias, filterItems }) {
  return (
    <div className='lateral'>
      {categorias.map((categoria, index) => {
        return (
          <button type='button' className='lateral-button' key={index} onClick={() => filterItems(categoria)}>
            {categoria}
          </button>
        );
      })}
      {/* <button className='lateral-button' onClick={() => filterItems('react')}>
        react
      </button> */}
      {/* <ul className='lateral-ul'>
        <li className='lateral-li selected' key='presentacion'>
          <button className='lateral-link'>Presentación</button>
        </li>
        <li className='lateral-li' key='react'>
          <button className='lateral-link'>React</button>
        </li>
        <li className='lateral-li' key='js'>
          <button className='lateral-link'>JS</button>
        </li>
        <li className='lateral-li' key='web-dev'>
          <button className='lateral-link'>web Development</button>
        </li>
        <li className='lateral-li' key='contactos'>
          <button className='lateral-link'>Contactos</button>
        </li>
      </ul> */}
    </div>
  );
}

export default Lateral;
