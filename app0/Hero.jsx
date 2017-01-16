import FriendList from './FriendList';
import Origin from './Origin';
import React from 'react';

const Hero = ({ name, friends, origin }) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <FriendList title='Super Friends'
                list={friends} />
    <Origin title='Origin Story'
            origin={origin} />
  </section>

  module.exports = Hero;
