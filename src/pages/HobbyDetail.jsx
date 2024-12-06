import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import hobyy from '../hobyy';
import Header from '../components/Header';
import NotFound from './NotFound'; 

export default function HobbyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hobby = hobyy.find((el) => el.id === parseInt(id));

  if (!hobby) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <Link to="/hobby">
        <button className='Back'>Back</button>
      </Link>
      <h1 className='Text'>{hobby.name}</h1>
      <p className='Text'>{hobby.description}</p>
    </div>
  );
}
