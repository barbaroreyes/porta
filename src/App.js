
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Main from './compo/Main';
import 'tachyons'
import {Routes,Route} from 'react-router-dom'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="container">
      <Header/> 
      <Routes>
        <Route path ='/' element={<Main/>}/>
        <Route path ='/projects' element={<Projects/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
