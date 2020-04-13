import React, {Fragment} from 'react'; 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = props => {

    const user = null; 

    const showLinks = () => {
        if (user) {
          return (
            <Fragment>
              <Nav.Link href="/" className="text-white">
                <span className="gold-hover">Logout</span>
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
          <Navbar.Brand className="f2 fw6 ml4">
            <span className="text-warning">GT Food Truck</span>
          </Navbar.Brand>
          <Nav className="ml-auto mr4">{showLinks()}</Nav>
        </Navbar>
      </div>
    );
}

export default Navigation; 

