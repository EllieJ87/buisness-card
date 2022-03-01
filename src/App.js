import './App.css';

import Header from './Components/Header'
import Contact from './Components/Contact'
import About from './Components/About'
import Interests from './Components/Interests'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className='container-fluid'>
      <div className='wrapper'>
        <Header />
        <Contact />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}