import React from 'react'
import {NavLink} from 'react-router-dom'

const selectedStyle = {
    backgroundColor: 'white',
    color: 'red'
}

const MainMenu = () => 
  <nav>
      <NavLink to="/" activeStyle={selectedStyle}>
          [外部组件]
      </NavLink>
      <NavLink to="/about" activeStyle={selectedStyle}>
          [About]
      </NavLink>
      <NavLink to="/events" activeStyle={selectedStyle}>
          [events]
      </NavLink>
      <NavLink to="/products" activeStyle={selectedStyle}>
          [products]
      </NavLink>
  </nav>

  export default MainMenu