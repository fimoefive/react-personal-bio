import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav, Navbar,
  NavbarToggler,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const authenticated = () => (
  //   <>
  //     <NavItem>
  //       <Link className="nav-link" to="/projects">Projects</Link>
  //     </NavItem>
  //   </>
  // );/display-projects

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/">Martin</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/bio">BIO</Link>
              </NavItem>
              {/* <NavItem>
                <Link className="nav-link" to="/display-projects">Projects</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/display-technologies">Technologies</Link>
              </NavItem> */}
              <NavItem>
                <Link className="nav-link" to="/projects">Admin Projects</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/technologies">Admin Technologies</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </NavItem>
              {/* {admin && authenticated()} */}
              {admin !== null
                && <NavItem className="authButtons">
                  {admin
                    ? <Button color='success' onClick={signOutUser}>Sign Out</Button>
                    : <Button color='info' onClick={signInUser}>Sign In</Button>
                  }
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
