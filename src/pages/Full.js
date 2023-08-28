import React from 'react';
import { Link } from 'react-router-dom';

const Full = () => {
  return (
    <div className='projects' >
      Front Projects
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

export default Full;