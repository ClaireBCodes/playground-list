import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import type { Playground } from "../types/types";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";


type PlaygroundCardProps = {
  playground: Playground;
};

export function BootstrapCard({ playground }: PlaygroundCardProps) {
    const [modalShow, setModalShow] = useState(false);

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
      <div className="card-footer bg-transparent border-success">
        <Button variant="outline-success" onClick={() => setModalShow(true)}>
          More Information
        </Button>
        <MyModal
          playground={playground}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </Card>
  );
}

function MyModal({ show, onHide, playground }) {
  let playgroundEquip = playground.playEquip.join(", ");
  let playgroundFacilities = playground.facilities.join(", ");

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
      className="border border-warning rounded"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-success"
        >
          <img variant="top" src={playground.imageLinks[0]} style={{maxHeight: 100 }} />
          {playground.name} | {playground.town}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Play Eqipment: {playgroundEquip}</ListGroup.Item>
          <ListGroup.Item>Facilities: {playgroundFacilities}</ListGroup.Item>
          <ListGroup.Item>Parking: {playground.parking}</ListGroup.Item>
          <ListGroup.Item>Shade: {playground.shade}</ListGroup.Item>
          <ListGroup.Item> Comments: {playground.comments} </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
