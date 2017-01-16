import Friend from './Friend';
import React from 'react';

const FriendList = ({ title, list }) =>
<section>
  <h2>{title}</h2>
  <ul className='friends'>
    {list.map((friend, i) =>
      <Friend key={i} {...friend} />
    )}
  </ul>
</section>

module.exports = FriendList;
