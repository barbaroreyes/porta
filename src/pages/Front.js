import React ,{useContext} from 'react';
import {ProjectContext} from '../context/projectcontext'


const Front = () => {
  const {projects} = useContext(ProjectContext)
  console.log(projects)
  return (<div className='projects'>
         {projects.map((item, i)=>{
          return(<div className='project'>
          <h3>{item.name}</h3>
          <div>
          <a href={item.live}>App</a>
          <a href={item.git}>Git</a>
          </div>
          </div>)})}
         </div>
    
  );
}

export default Front;
