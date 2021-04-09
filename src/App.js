import React, { useState, useEffect } from 'react';
import projectsList from './data';
import Header from './components/Header';
import Lateral from './components/Lateral';
import Display from './components/Display';
import Footer from './components/Footer';

const allCategorias = [
  'all',
  ...new Set(projectsList.map((item) => item.categoria)),
];

function App() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState(projectsList);
  const [categorias, setCategorias] = useState(allCategorias);
  const [value, setValue] = useState(0);
  // const [cat, setCat] = useState(1);

  const filterItems = (categoria) => {
    if (categoria === 'all') {
      setList(projectsList);
      return;
    }
    const newItems = list.filter((item) => item.categoria === categoria);
    setList(newItems);
  };
  // fetch lista
  // const fetchList = () => {
  //   setTimeout(() => {
  //     setList(projectsList);
  //     setLoading(false);
  //   }, 500);
  // };
  // useEffect de fetch
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  // console.log(list);
  if (loading) {
    return (
      <section className='loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  // destructure list
  // const {  } = list[value];

  return (
    <div className='container'>
      <Header />
      <div className='main'>
        <Lateral filterItems={filterItems} categorias={categorias} />
        <div className='display'>
          <Display proyectos={list} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/* https://react-projects-6-tabs.netlify.app/

import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;


*/
