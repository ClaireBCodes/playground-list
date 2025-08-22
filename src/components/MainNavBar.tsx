import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export function MainNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Playgrounds in the Blue Mountains
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/playgrounds" as={Link}>
              Playgrounds
            </Nav.Link>
            <NavDropdown title="By Town" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Katoomba</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Leura</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Wentworth Falls
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/suggested" as={Link}>
              Suggested
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

