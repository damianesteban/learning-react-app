import React from 'react';
import { Component } from 'react'
import { PropTypes } from 'react'

class Summary extends React.Component {
  static propTypes = {
    origin: PropTypes.number,
    friends: PropTypes.number,
    name: PropTypes.string
  }

  static defaultProps = {
    origin: 12,
    friends: 15,
    name: 'Teets'
  }
  
  render() {
      const { origin, friends, name } = this.props
      return (
        <div className="summary">
          <h1>{name}</h1>
          <p>
            <span>{origin} Lines | </span>
            <span>{friends} Friends</span>
          </p>
        </div>
      )
  }
}


module.exports = Summary
