import React, { Component } from 'react'
import {NavLink,Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem} from 'reactstrap';
import '../Navbar/NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }
    
    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }
    
    closeNavbar() {
        if (this.state.collapsed !== true) {
        this.toggleNavbar();
        }
    }
  render (){
    return (
        <div className="Nav">
        <Navbar className="navbar  navbar-dark ">
       <NavbarBrand tag={NavLink} to="/">givable </NavbarBrand>
       <NavbarToggler onClick={this.toggleNavbar} />
       <Collapse isOpen={!this.state.collapsed} navbar>
         <Nav className="mr-auto" navbar>
         <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          
         </Nav>
       </Collapse>
     </Navbar>
   
     </div>
   
    )
  }
   
}

export default NavBar;
