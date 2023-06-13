import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink className="btn btn-dark" style={{textDecoration:"none",color:"white"}} href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="btn btn-dark"  >
              <Link style={{textDecoration:"none",color:"white"}} to="/" >News</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="btn btn-dark">
            <Link style={{textDecoration:"none",color:"white"}} to="/contact" >Contact</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}