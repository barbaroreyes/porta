import React from 'react';
import { Link } from 'react-router-dom';

const Front = () => {
  return (
    <div className='projects' >
      Front Projects
      <div className=" project"  >
      <h3>Beers Store</h3>
      <div>
      <a href='https://barbaro-store-beers.netlify.app/'>App</a>
       <a href='https://github.com/barbaroreyes/app-store-beers'>Github</a> 
      </div>
        </div>
        <div className=" project"  >
        <h3>Search Friends</h3>
        <div>
        <a href='https://elastic-rosalind-30a9ac.netlify.app/' to='/'>App</a>
       <a href='https://github.com/barbaroreyes/newT2/tree/master/src'>Github</a> 
        </div>
       
        </div>

<div className=" project"  >
<h3>Store Pets</h3>
<div>
<a href='https://add-your-pet.netlify.app/'>App</a>
       <a href='https://github.com/barbaroreyes/dogs-app-frontend'>Github</a> 
</div>
    
        </div>
        <div className=" project"  >
        <h3>Ecommerce</h3>
        <div>
        <a href='https://hungry-einstein-27344a.netlify.app/'>App</a>
       <a href='https://github.com/barbaroreyes/EcomerceCLone'>Github</a> 
        
        </div>
    
        </div>
        <div className=" project"  >
        <h3>Seven Wonder</h3>
        <div>
        <a href='https://mystifying-panini-451434.netlify.app/'>App</a>
       <a href='https://github.com/barbaroreyes/seven_wonders-frontend'>Github</a> 
        </div>
       
       <div></div>
        </div> 
    </div>
    
  );
}

export default Front;
