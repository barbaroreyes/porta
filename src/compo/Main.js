import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="main_container">
      
      <Link className='grow'>Front-End</Link>
      <Link className='grow'>Backend</Link>
      <Link className='grow'>Full Stack</Link>
      <Link className='grow'>UX/UI Desing</Link>
    </div>
  )
}

export default Main
