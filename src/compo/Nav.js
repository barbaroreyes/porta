import {useState}from 'react';
import {Link} from 'react-router-dom'
import Hamburger from 'hamburger-react'

const Nav = () => {
  const[open , setOpen] = useState(false)



  return (
    <div className="nav_container">
    <Hamburger color = 'white' size={30} duration={1} onToggle={toggle =>{
      if(toggle){
        console.log('open Menu')
      }else{
        console.log('close Menu')
      }
    }}/>
      
      <nav className="regular_nav">
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        
      </nav>
    </div>
  );
}

export default Nav;
