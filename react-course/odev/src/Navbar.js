import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";

function cNavbar({links}){
    return(
        <Navbar color="info" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem><img src="https://img.freepik.com/premium-vector/flat-design-korean-drama-lettering_23-2149656874.jpg?w=2000" width={50} height={50}/></NavItem>
                {links.map((link,index)=>(
                    <NavItem key={index}>
                        <NavLink href={link.url}>{link.title}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Navbar>
    )
}

export default cNavbar