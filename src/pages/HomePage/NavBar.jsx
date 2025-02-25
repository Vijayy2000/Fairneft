// import React from "react";
// import { Row, Col, Button } from "reactstrap";

// const NavBar = () => {
//   return (
//     <>
//       <Row className="d-flex flexx-row justify-content-between">
//         <Col md={2}>
//           <img
//             src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/Fairnet-Logo-Final.svg`}
//             alt="Logo"
//             height="40px"
//             width="200px"
//           ></img>
//         </Col>

//         <Col md={5} className="d-flex flex-row justify-content-center">
//           <Col md={2}>Home</Col>
//           <Col md={2}>About Us</Col>
//           <Col md={2}>Product</Col>
//           <Col md={2}>Contact</Col>
//           <Col md={2}>FAQ</Col>
//         </Col>
//         <Col md={5}>
//           <Button>LogIn</Button>
//           <Button>Register</Button>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default NavBar;


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

          {/* Center - Navigation (Hidden on mobile) */}
          <Col md={6} className="d-none d-md-flex justify-content-center gap-3">
            <span className="nav-link">Home</span>
            <span className="nav-link">About Us</span>
            <span className="nav-link">Product</span>
            <span className="nav-link">Contact</span>
            <span className="nav-link">FAQ</span>
          </Col>

          {/* Right - Buttons & Hamburger */}
          <Col xs={6} md={3} className="d-flex justify-content-end">
            <div className="d-none d-md-block">
              <Button color="light" className="me-2 px-3">Log In</Button>
              <Button color="success" className="px-3 rounded-4">Register</Button>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="d-md-none">
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
