import { useState } from 'react';
import data from './data';
import Nav from './components/Nav';
import Section from './components/Section';
import Aside from './components/Aside';
import Footer from './components/Footer';
import photo from './images/dev-fer-01.jpg'

function App() {
    return (
        <>
            <header>
                <nav>
                    <ul className='nav-ul'>
                        <li>
                            <a href='https://www.linkedin.com/in/fernando-armonelli-fiedler/'>Linkedin</a>
                        </li>
                        <li>
                            <a href='https://github.com/fernandoarmonellifiedler'>Github</a>
                        </li>
                        <li>
                            <a href='https://github.com/fernandoarmonellifiedler/personal-projects'>My projects Repo</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <main>
                {/* <aside>
                <h3>Categories</h3>
                <ul>
                    <li>
                    <button className='btn'>All</button>
                    </li>
                    {data
                    .map((item) => item.categoria)
                    .filter((item, index, arr) => {
                        return arr.indexOf(item) == index;
                    })
                    .map((item) => (
                        <li>
                        <button className='btn'>{item}</button>
                        </li>
                    ))}
                </ul>
                </aside> */}

                <section className='projects-display'>
                    <h2 class="main-section__title">my projects</h2>

                    <section className='projects'>
                        {data.map((project) => {
                            const { id, title, img, link } = project;

                            return (
                                <a key={id} className='item' href={link}>
                                    <img src={img} alt={title} />
                                    <h4>{title}</h4>
                                </a>
                            );
                        })}
                    </section>
                </section>
            </main>

            <footer>
                <h3>Contact me!</h3>
                <p>fernandoarmonelli@gmail.com</p>
            </footer>
        </>
    );
}

export default App;
