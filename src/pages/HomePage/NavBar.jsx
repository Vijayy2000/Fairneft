import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.scss";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <Container>
        <Row className="align-items-center justify-content-between">
          {/* Left - Logo */}
          <Col xs={6} md={3} className="d-flex align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/FairNetLogoHead.svg`}
              alt="Logo"
              className="logo"
            />
          </Col>

          {/* Center - Navigation (Hidden on mobile & tablet) */}
          <Col lg={6} className="d-none d-lg-flex justify-content-center text-white gap-3">
            <span className="nav-link">Home</span>
            <span className="nav-link">About Us</span>
            <span className="nav-link">Product</span>
            <span className="nav-link">Contact</span>
            <span className="nav-link">FAQ</span>
          </Col>

          {/* Right - Buttons & Hamburger */}
          <Col xs={6} md={3} className="d-flex justify-content-end">
            {/* Buttons (Show only on large screens and above) */}
            <div className="d-none d-lg-flex">
              <Button  className="me-2 px-3 border-0 bg-transparent text-white">Log In</Button>
              <Button className="px-3 rounded-5" style={{background:"#77C476"}}>Register</Button>
            </div>

            {/* Hamburger Menu for Mobile & Tablet */}
            <div className="d-flex d-lg-none">
              <Button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </Button>
            </div>
          </Col>
        </Row>

        {/* Mobile Menu - Opens on Click */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <span className="mobile-link">Home</span>
          <span className="mobile-link">About Us</span>
          <span className="mobile-link">Product</span>
          <span className="mobile-link">Contact</span>
          <span className="mobile-link">FAQ</span>
          <Button color="light" className="mt-3 w-100">Log In</Button>
          <Button color="success" className="mt-2 w-100">Register</Button>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
