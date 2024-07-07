import './assets/bootstrap.min.css'
import './App.css';
import './style.css'
import Header from './Component/Header/Head/Header';
import OurServices from './Component/Serveses/OurServices';

import About from './Component/About/About';
import WhyChosse from './Component/Why Choose Us/WhyChosse';

function App() {
  return (
    <div className="App">
      <Header />
      <OurServices />
      <About />
      <WhyChosse />
    </div>
  );
}

export default App;
