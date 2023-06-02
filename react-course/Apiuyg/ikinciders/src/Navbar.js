import React from 'react';
import { Nav, NavItem, NavLink,Button, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
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
              <Link style={{textDecoration:"none",color:"white"}} to="/cart" >Cart</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" className="btn btn-dark" style={{textDecoration:"none",color:"white"}} href="#">Contact</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="btn btn-dark" style={{textDecoration:"none",color:"white"}} nav caret>
                  Cart-{this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu end>
                  {this.props.cart.map((crt)=>(
                    <DropdownItem key={crt.product.id}>
                      {crt.product.productName}({crt.quantity})<span 
                      onClick={()=>this.props.removeToCart(crt.product)} 
                      className='badge badge-danger' style={{marginRight:"10px",backgroundColor:"red"}}>X</span>
                    </DropdownItem>
                  ))}
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button className="btn btn-danger" >Delete</Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          
        </Nav>
      </div>
    );
  }
}