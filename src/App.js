import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './components/data';
import './styles.css';

export default function App() {

  const cardData = Data.map(item => {
    return <Card
      key={item.id}
      {...item}
    />
  })

  return (
    <section>
      <Navbar />
      <section className='cardlist'>
        {cardData}
      </section>
    </section>
  )
}