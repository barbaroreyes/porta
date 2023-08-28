import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="main_container">
      
      <Link to ='/front_projects' className='grow'>Front-End</Link>
      <Link to ='/back_projects' className='grow'>Backend</Link>
      <Link to ='/full_projects'  className='grow'>Full Stack</Link>
      <Link to ='/ux_projects' className='grow'>UX/UI Desing</Link>
    </div>
  )
}

export default Main
