import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    <div className='header'>
      <Link className='HeaderText' to={'/'}>Home</Link>
      <Link className='HeaderText' to={'/projekts'}>Projekts</Link>
      <Link className='HeaderText' to={'/Hobby'}>Hobby</Link>
    </div>
      <div className="row"></div>
   </div>
  )
}
