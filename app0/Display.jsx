import Hero from './Hero'
import React from 'react';

export const Display = ({ heroes }) =>
  <article>
    <header>
      <h1>SuperHeroes</h1>
    </header>
    <div className='heroes'>
      {heroes.map((hero, i) =>
        <Hero key={i} {...hero} />
      )}
    </div>
  </article>

module.exports = Display
