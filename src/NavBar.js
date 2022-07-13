import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
       <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link as={Link} to='/users'>All Users</Nav.Link>
              <Nav.Link as={Link} to="/addusers">Add Users</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
