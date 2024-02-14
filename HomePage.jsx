import React from 'react'
import { Link } from 'react-router-dom'
import design from "./design.module.css"

const HomePage = () => {
  return (
   <div>
     <div id={design.nav} >
      <Link to="/" className={design.new}>New Book</Link>
      <Link to="/Library" className={design.new}>Libraries</Link>
    </div>
   </div>
  )
}

export default HomePage
