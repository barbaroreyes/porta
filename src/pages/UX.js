import React from 'react';
import { Link } from 'react-router-dom';

const UX = () => {
  return (
    <div className='projects' >
     UX/UI Projects
      <div className=" project"  >
      <h3>Portafolio Music</h3>
      <div>
      <Link  to='/case'>App</Link>
       
       <a href='/'>Case Studies</a>

      </div>
       
        </div>
        <div className=" project"  >
        <h3>projectName</h3>
       <Link to='/'>app</Link>
       <Link to='/'>Github</Link> 
        </div>

<div className=" project"  >
<h3>projectName</h3>
       <Link to='/'>app</Link>
       <Link to='/'>Github</Link> 
        </div>
        <div className=" project"  >
        <h3>projectName</h3>
       <Link to='/'>app</Link>
       <Link to='/'>Github</Link> 
        app github
        </div>
        <div className=" project"  >
        <h3>projectName</h3>
       <Link to='/'>app</Link>
       <Link to='/'>Github</Link> 
        </div> 
    </div>
    
  );
}

export default UX;