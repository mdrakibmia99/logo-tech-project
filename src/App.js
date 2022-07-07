import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <section>
      <Banner />
      <Services />
      <Experience/>
      <Portfolio/>
    </section>
  );
}

export default App;