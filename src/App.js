
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sectionthree from './Accordbs';
import Home from './home';
import About from './about';
import Service from './service';
import Card from './card'
import SectionFour from './offre'
import Testimonial from './Testimonial';
import Contact from './contact'
import Footer from './footer';
import Partners from './partners'
function App() {
  return (
    <div className="App">
      
      <Home/>
      <Service/>
      <Sectionthree/>
      <About/>
      <Card/>
      <SectionFour/>
      <Testimonial/>
      <Partners/>
      <Contact/>
      <Footer email='info@gmail.com' num='2366668t'/>
    </div>
  );
}
export default App;
