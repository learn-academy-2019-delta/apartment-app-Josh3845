import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Listing extends Component {
    render() {
        return(
           <div>
            <Nav>
	            <NavItem>
	              <NavLink to="/home" tag={Link}>Home</NavLink>
	            </NavItem>
	            </Nav>
           <h1>Apartment Listings</h1>
           </div>
            
            )
    }
}