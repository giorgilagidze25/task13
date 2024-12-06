import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Projekts() {
  const githubUrl = 'https://github.com/';

  return (
    <div>
      <Header/>
        <div className='flex'>
          <img src="/assets/profileImg.png"  style={{ borderRadius: '50%' }} alt="" />
          <p className='homeText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolorum voluptatibus reprehenderit perspiciatis sapiente sed quo nisi?</p>
        </div>
        <h1>email: test@example.com</h1>
        <Link
          to="#"
          onClick={() => window.location.href = githubUrl}
          style={{
            textDecoration: 'none',
            color: 'blue',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
           GitHub Link
        </Link>

  </div>
  )
}
