import { Outlet, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { motion as m } from "framer-motion";
import { parentNav } from "../animations/animations";

export default function NavPage() {
  return (
    <>
      <m.div variants={parentNav} initial="hidden" animate="show">
        <Navbar expand="lg" className="color-nav" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              ARCH.STUD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>

                <Nav.Link as={Link} to="/demo">
                  Get Estimate
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </m.div>
      <Outlet></Outlet>
    </>
  );
}
