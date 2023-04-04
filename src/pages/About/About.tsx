import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { motion as m } from "framer-motion";
import { pageAnimationLeft } from "../../animations/animations";

export default function About() {
  return (
    <m.div
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              fluid
              rounded
              className=""
            ></Image>
          </Col>
          <Col sm={5}>
            <h2 className="mt-4 mainTitle2">Our Background.</h2>
            <p className="my-4 ">
              Seeking the delivery of quality, efficient and professional
              service to a growing global market, we entered into a creative
              collaboration in 2001. The partnership has created a synergy that
              brings the distinctive style.
              <br />
              <br />
              The previous office was at the heart of Bangkok’s business
              district and after a long period of paying the costly rental
              prices in an office building, they decided that it was time to
              build their own headquarters.
            </p>
            <Container>
              <Row className="px-10"></Row>
            </Container>
          </Col>
        </Row>
        <Row className="px-4 my-5">
          <Col sm={5}>
            <h2 className="mt-4 mainTitle2">Our Mission.</h2>
            <p className="my-4 ">
              Seeking the delivery of quality, efficient and professional
              service to a growing global market, we entered into a creative
              collaboration in 2001. The partnership has created a synergy that
              brings the distinctive style.
              <br />
              <br />
              The previous office was at the heart of Bangkok’s business
              district and after a long period of paying the costly rental
              prices in an office building, they decided that it was time to
              build their own headquarters.
            </p>
            <Container>
              <Row className="px-10"></Row>
            </Container>
          </Col>
          <Col sm={7}>
            <Image
              src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2041&q=80"
              fluid
              rounded
              className=""
            ></Image>
          </Col>
        </Row>
      </Container>
    </m.div>
  );
}
