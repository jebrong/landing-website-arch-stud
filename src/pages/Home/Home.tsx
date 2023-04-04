import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { projects } from "../../data/localData";

import { motion as m } from "framer-motion";
import { pageAnimationLeft } from "../../animations/animations";

export default function Home() {
  return (
    <m.div
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <Container>
        <Row className="py-5">
          <Col>
            <div className="mainTitle">ARCH.STUD</div>
          </Col>
          <Col>
            <div className="subTitle pt-lg-2 pb-2">
              <div className=" "> Architecture.</div>
              <div>Interior Design.</div>
              <div>Planning.</div>
            </div>
            <div className="subTitle pt-lg-2 pb-2 ">
              <Button
                size="lg"
                variant="light"
                className="cta-button"
                as={Link}
                to="/demo"
              >
                GET AN ESTIMATE
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Carousel className="h-25">
        {projects.map((project, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={project.img}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Container>
        <Row className="px-4 aboutContainer">
          <Col sm={6}>
            <h2 className="mt-4 mainTitle2">Who we are.</h2>
          </Col>
          <Col sm={3}>
            <p className="mt-4 ">
              Seeking the delivery of quality, efficient and professional
              service to a growing global market, Budji and Royal entered into a
              creative collaboration in 2001. The partnership has created a
              synergy that brings the distinctive style. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Maxime eos minus placeat
              possimus voluptates est, perspiciatis laborum dolore natus quo
              tenetur eaque tempora commodi. Debitis ab praesentium possimus
              nostrum voluptatem facere odit.
            </p>
          </Col>
          <Col sm={3}>
            <p className="mt-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur placeat quo sed, sequi optio delectus culpa velit totam
              animi maxime repudiandae recusandae excepturi vero, impedit,
              quaerat doloremque ducimus aliquam maiores perspiciatis atque.
              Seeking the delivery of quality, efficient and professional
              service to a growing global market, Budji and Royal entered into a
              creative collaboration in 2001. The partnership has created a
              synergy that brings the distinctive style
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card
              style={{ width: "11rem" }}
              className="cardStats text-center mx-auto   my-5 "
              bg="transparent"
            >
              <h1>55</h1>
              <p>Structures Built</p>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "11rem" }}
              className="cardStats text-center mx-auto  my-5 "
              bg="transparent"
            >
              <h1>5</h1>
              <p>Ongoing Projects</p>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "11rem" }}
              className="cardStats text-center mx-auto  my-5 "
              bg="transparent"
            >
              <h1>92</h1>
              <p>Positive Feedbacks</p>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "11rem" }}
              className="cardStats text-center mx-auto  my-5 "
              bg="transparent"
            >
              <h1>42</h1>
              <p>Clients</p>
            </Card>
          </Col>
        </Row>

        <Row className="px-4 my-5 mx-auto">
          <Row>
            <h2 className="mt-4 mainTitle2">Our Services.</h2>
          </Row>

          <Row className="mx-auto">
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="bg-dark text-white text-center mx-auto my-5"
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"
                />
                <Card.Body>
                  <Card.Title className="servicesTitle">
                    Architecture
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="bg-dark text-white text-center  mx-auto my-5"
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
                />
                <Card.Body>
                  <Card.Title className="servicesTitle">Interiors</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                style={{ width: "18rem" }}
                className="bg-dark text-white text-center  mx-auto my-5"
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                />
                <Card.Body>
                  <Card.Title className="servicesTitle">Planning</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>

        <Row>
          <h1 className="mb-4 mainTitle2">Frequently Asked Questions.</h1>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                At what point in my project should I involve an architect?
              </Accordion.Header>
              <Accordion.Body>
                As soon as you decide you want to begin planning your project,
                you should start looking for an architect. Architects provide
                important pre-design services including site evaluation, and can
                help you explore options you may not have considered. Involving
                an architect early in the process can help avoid costly
                missteps, and increase the likelihood of your satisfaction with
                the project.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Don't architects add substantial cost to a project?
              </Accordion.Header>
              <Accordion.Body>
                While it's true that architects' fees are an additional project
                cost, hiring an architect can actually save you money in many
                ways. Architects can monitor your budget and negotiate to get
                the best materials and workmanship at a good price. An
                architect's design can reduce energy and maintenance costs, and
                provide an efficient layout so that you don’t overbuild what you
                really need. They can turn a difficult lot into a successful
                building site. And they spend time planning and fully developing
                your ideas to avoid changes once construction is underway.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How do I prepare to build a home?
              </Accordion.Header>
              <Accordion.Body>
                When preparing to build a home, the first step is to research
                and get recommendations for homebuilders in your area. After
                you’ve found your homebuilder, you should schedule your first
                meeting with them. In this first meeting, you’ll talk about
                floor plans, locations, and customizations. Once you nail down
                exactly what you want, your builder will be able to put together
                the estimate of the cost of your home. After you get the
                estimate, you should determine your home financing. Then, it’s
                time to nail down the construction timeline and get ready for
                your new home to be completed.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How are architects compensated?
              </Accordion.Header>
              <Accordion.Body>
                An architect's compensation can be based on time, a stipulated
                sum, a percentage of the cost of the work, the project's square
                footage, unit cost (based on number of rooms/apartments, etc.),
                or royalty in which compensation is a share of the profit
                derived from the project. Time-based compensation and stipulated
                sums are most common.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What's my role in the design process?
              </Accordion.Header>
              <Accordion.Body>
                Your architect will depend on you to communicate about your
                design preferences, functional requirements, and budget. Your
                timely response to questions and design submissions will help
                keep the project on track. It is also important for you to raise
                any concerns you have as the project proceeds, so they can be
                addressed in the earliest stages. Working in partnership with
                your architect, you will help achieve a successful outcome for
                your project.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
      <footer className="py-2 mt-5 bg-danger text-white">
        <Container className="px-2">
          <p className="text-center">design and coded by Janille Sy</p>
        </Container>
      </footer>
    </m.div>
  );
}
