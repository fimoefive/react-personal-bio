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

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/projects">Projects</Link>
      </NavItem>
    </>
  );

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/">Main</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {admin && authenticated()}
              {admin !== null
                && <NavItem className="authButtons">
                  {admin
                    ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
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
