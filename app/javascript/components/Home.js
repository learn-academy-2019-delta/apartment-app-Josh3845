import React from "react";
import PropTypes from "prop-types";
import {Nav, NavItem, NavLink} from 'reactstrap';
import Listing from './pages/Listing';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <Router>
     <div>
       <Nav>
          
           <NavItem>
                <NavLink to="/Listing" tag={Link}>Listings</NavLink>
            </NavItem>
             <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
             <NavItem>
               <NavLink disabled href="#">Disabled Link</NavLink>
             </NavItem>
        </Nav>
        
        <Route path="/Listing" exact component={Listing} />
      </div>
      
      </Router>
    );
  }
}

export default Home
