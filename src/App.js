
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Main from './compo/Main';
import 'tachyons'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Header/> 
      <Routes>
        <Route path ='/' element={<Main/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
