import React from 'react';

const Origin = ({ title, origin }) =>
  <section className='origin'>
    <h2>{title}</h2>
    {origin.map((o, i) =>
      <p key={i}>{o}</p>
    )}
  </section>

  module.exports = Origin
