import React, {Fragment} from 'react'; 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

const Navigation = ({logout, user}) => { 
    const showLinks = () => {
        if (user) {
          return (
            <Fragment>
              <Nav.Link href="/" className="text-white">
                <span className="gold-hover" onClick={e => {
                  e.preventDefault(); 
                  logout(); 
                }}>Logout</span>
              </Nav.Link>
            </Fragment>
          )
        }

        return (
          <Fragment>
            <Nav.Link href="/" className="text-white">
              <span className="gold-hover">Login</span>
            </Nav.Link>
            <Nav.Link href="/register" className="text-white">
              <span className="gold-hover">Register</span>
            </Nav.Link>
          </Fragment>
        );
    }

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand className="f2 fw6 ml4" href="/home">
            <span className="text-warning">GT Food Truck</span>
          </Navbar.Brand>
          <Nav className="ml-auto mr4">{showLinks()}</Nav>
        </Navbar>
      </div>
    );
}

const mapStateToProps = state => ({
    user: state.auth.user
}); 

export default connect(mapStateToProps, {logout})(Navigation); 

