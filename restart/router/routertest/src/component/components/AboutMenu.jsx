import React from 'react'
import {NavLink} from 'react-router-dom'

const selectedStyle = {
    backgroundColor: 'white',
    color: 'red'
}
const AboutMenu = ({match}) =>
  <div>
      <li>
         <NavLink to="/about" style={match.isExact && selectedStyle}>[AboutMenu Company]</NavLink>
      </li>
      <li>
         <NavLink to="/about/history" style={selectedStyle}>[AboutMenu history Company]</NavLink>
      </li>

      <li>
         <NavLink to="/about/services" style={selectedStyle}>[AboutMenu services Company]</NavLink>
      </li>

      <li>
         <NavLink to="/about/location" style={selectedStyle}>[AboutMenu location Company]</NavLink>
      </li>

  </div>

  export default AboutMenu