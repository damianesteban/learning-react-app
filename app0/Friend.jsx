import React from 'react';

const Friend = ({ name, powerLevel, hometown}) =>
  <li>
    <span className='name'><span className="bold-text">Name:</span> {name}</span>
    <span className='powerLevel'><span className="bold-text">Power Level:</span> {powerLevel}</span>
    <span className='hometown'><span className="bold-text">Hometown: {hometown}</span></span>
  </li>

  module.exports = Friend
