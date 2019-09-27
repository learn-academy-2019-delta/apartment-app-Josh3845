import React from "react";
import PropTypes from "prop-types";
import {Nav, NavItem, NavLink} from 'reactstrap';
import Listing from './pages/Listing';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
      const {
          logged_in,
          sign_in_route,
          sign_out_route
      } = this.props
      
     
    return (
      <Router>
     <div>
        <Nav>
       
            <NavItem>
                <NavLink to="/Listing" tag={Link}>Listings</NavLink>
            </NavItem>
       
        </Nav>
        
           <React.Fragment>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      </React.Fragment>
      
        
        <Route path="/Listing" exact component={Listing} />
      </div>
      
         
        </Router>
    );
  }
}

export default Home
