import React from 'react';
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <div className='projects' >
      Backend Projects
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
    </div>
    
  );
}

export default Back;
