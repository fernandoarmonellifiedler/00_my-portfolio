import { useState } from 'react';
import data from './data';
import Nav from './Nav';
import Section from './Section';
import Aside from './Aside'
import Footer from './Footer';

function App() {
  const [projects, setprojects] = useState(data);

  return (
    <>
      <header>
        <Nav />
        <h1>Fernando Armonelli Fiedler</h1>
      </header>
      <main>
        <Aside data={data}/>
        <Section projects={projects} />
      </main>

      <Footer />
    </>
  );
}

export default App;
