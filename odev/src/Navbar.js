import React from "react";
import { Nav, NavItem,NavLink } from "reactstrap";

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <Nav style={{backgroundColor:"#212529"}}>
                    <NavItem>
                        <NavLink href="#" className="btn btn-dark" style={{display:"block",textDecoration:"none",color:"white"}}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="btn btn-dark" style={{display:"block",textDecoration:"none",color:"white"}}>Staff</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="btn btn-dark" style={{display:"block",textDecoration:"none",color:"white"}}>Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="btn btn-dark" style={{display:"block",textDecoration:"none",color:"white"}}>About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="btn btn-dark" style={{display:"block",textDecoration:"none",color:"white"}}>Contact</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}