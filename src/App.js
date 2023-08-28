
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Main from './compo/Main';
import 'tachyons'
import {Routes,Route} from 'react-router-dom'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Front from './pages/Front';
import Back from './pages/Back';
import Full from './pages/Full';
import UX from './pages/UX';
import Case from './pages/Case';

function App() {
  return (
    <div className="container">
      <Header/> 
      <Routes>
        <Route path ='/' element={<Main/>}/>
        <Route path ='/projects' element={<Projects/>}/>
        <Route path ='/front_projects' element={<Front/>}/>
        <Route path ='/back_projects' element={<Back/>}/>
        <Route path ='/full_projects' element={<Full/>}/>
        <Route path ='/ux_projects' element={<UX />}/>
        <Route path ='/case' element={<Case/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
