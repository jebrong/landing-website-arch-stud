import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Error() {
  return (
    <Container>
      <Row>
        <h2 className="mt-5 mainTitle2 text-center ">404! NOT FOUND</h2>
      </Row>
      <Row>
        <Button
          size="lg"
          variant="light"
          className="cta-button"
          as={Link}
          to="/"
        >
          GO BACK
        </Button>
      </Row>
    </Container>
  );
}
