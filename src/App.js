import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import TeamSlider from './components/TeamSlider';
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  return (
    <section>
      <div
      className='fixed z-50 text-white h-4 w-4 bg-blue-400 box-border lg:flex justify-center items-center p-6 rounded-full top-[93%] left-[1%] shadow-xl md:flex hidden'
      >
        <a href="#header-section"><i class="fa fa-angle-double-up  text-4xl" aria-hidden="true" /> </a>
      </div>
      <Banner />
      <Services />
      <Experience />
      <Portfolio />
      <TestimonialSlider />
      <TeamSlider />
      <Footer />
    </section>
  );
}

export default App;