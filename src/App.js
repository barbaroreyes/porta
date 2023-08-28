import logo from './logo.svg';
import './App.css';
import Header from './compo/Header';
import Main from './compo/Main';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/> 
      <Routes>
        <Route path ='/' element={<Main/>}/>
      </Routes>
       <Main/>
    </>
    
  );
}

export default App;