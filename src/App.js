import Header from './components/Header';
import Lateral from './components/Lateral';
import Display from './components/Display';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='main'>
        <Lateral/>
        <Display/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
