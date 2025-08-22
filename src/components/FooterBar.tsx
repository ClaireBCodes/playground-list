
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

export function FooterBar() {
  return (
    <Container>
      <Nav
        className="justify-content-center bg-body-tertiary "
        style={{ width: "100%" }}
      >
        <Nav.Item>
          <Nav.Link>Developed by ClaireBCodes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Powered by Caffine and Optimism</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
