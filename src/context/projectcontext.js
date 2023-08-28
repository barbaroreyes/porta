import {createContext , useState} from 'react';
import {data} from '../data/projects'
const ProjectContext = createContext([]);

const ProjectProvider = ({children}) => {
 const [projects ,setProject] = useState(data);

 const filtered = (type)=> projects.filter( item => item.type === type)

  return ( 
   <ProjectContext.Provider value={{projects ,filtered}}>
      {children}
   </ProjectContext.Provider>
   )

}

export{ProjectContext ,ProjectProvider}
