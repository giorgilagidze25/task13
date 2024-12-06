import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import hobyy from '../hobyy';

export default function Hobby() {
  return (
    <div>
      <Header />
      <div className="container">
        {hobyy.map((el) => (
          <div className="card" key={el.id}>
            <h1>{el.name}</h1>
            <Link to={`/hobby/${el.id}`}>
              <button className='showMore'>Show More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
