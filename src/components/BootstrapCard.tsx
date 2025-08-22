import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import type { Playground } from "../types/types";


type PlaygroundCardProps = {
  playground: Playground;
};

export function BootstrapCard({ playground }: PlaygroundCardProps) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={playground.imageLinks[0]} />
      <Card.Body>
        <Card.Title>{playground.name}</Card.Title>
        <Card.Text>{playground.town}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Play Eqipment: {playground.playEquip}</ListGroup.Item>
        <ListGroup.Item>Facilities: {playground.facilities}</ListGroup.Item>
        <ListGroup.Item>Parking: {playground.parking}</ListGroup.Item>
        <ListGroup.Item>Shade: {playground.shade}</ListGroup.Item>
      </ListGroup>
      <Card.Text>Comments: {playground.comments}</Card.Text>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
