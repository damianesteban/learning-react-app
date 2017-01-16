import React from 'react'
import { render } from 'react-dom'

import AddColorForm from './AddColorForm'

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}



render(
  <AddColorForm />,
  document.getElementById('app')
)
