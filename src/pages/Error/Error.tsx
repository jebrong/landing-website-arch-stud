import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Navbar from "react-bootstrap/Navbar";

export default function Error() {
  return (
    <Container>
      <Row>
        <h2 className="mt-5 mainTitle2 text-center ">404! NOT FOUND</h2>
      </Row>

      <Row>
        <Navbar.Brand className="error" as={Link} to="/demo">
          GO BACK
        </Navbar.Brand>
      </Row>
    </Container>
  );
}
