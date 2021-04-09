import React from 'react';

function Display({ proyectos }) {
  return (
    <div className='display-area'>
      {proyectos.map((proyecto) => {
        const { id, title, img, description } = proyecto;
        return (
          <article className='display-element' key={id}>
            <img src={img} alt={title} className='element-img' />
            <div className='element-info'>
            <header>
            <h3>{title}</h3>
            </header>
              
              <p className='element-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Display;
