import './App.css';

import Showcase from './components/showcase/Showcase';
import Hero from './components/Hero/Hero';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Showcase />
    <Hero />
    <Section1 />
    <Section2 />
    <Footer />
    </div>
  );
}

export default App;
