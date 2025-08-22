import { BootstrapCard } from "../components/BootstrapCard";
import { Row, Col, Container } from "react-bootstrap";
import theList from "../assets/data/playground.json";
import type { Playground } from "../types/types";

export function PlaygroundList() {

  const playgrounds:Playground[] = theList.playgrounds

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {playgrounds.map((playground) => (
          <Col key={playground.id}>
            <BootstrapCard playground={playground} />
          </Col>
        ))}
      </Row>
    </Container>
  )
  }