import React from "react";
import { Row, Col } from "reactstrap";
import Logo from "../../assets/Images/HomePage/FooterLogo.svg";

const Footer = () => {
  return (
    <Row className="d-flex flex-column flex-md-row justify-content-start align-items-start text-start mx-3 my-4">
      
      {/* Logo Section */}
      <Col xs={12} md={4} className="mb-3 mb-md-0">
        <img src={Logo} alt="footer Logo" className="img-fluid" />
      </Col>

      {/* Links Section */}
      <Col xs={12} md={8} className="d-flex flex-column flex-md-row justify-content-start">
        <Col xs={12} md={4} className="mb-3">
          <Col className="fs-6 fw-bold" style={{ color: "#5665B0" }}>Credit Solutions</Col>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Personal Loan</li>
            <li>Home Loan</li>
            <li>Gold Loan</li>
            <li>Business Loan</li>
            <li>Micro Loan</li>
          </ul>
        </Col>

        <Col xs={12} md={4} className="mb-3">
          <Col className="fs-6 fw-bold" style={{ color: "#5665B0" }}>Investments & Insurances</Col>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Term Life Insurance</li>
            <li>Health Insurance</li>
            <li>Investment Plan</li>
            <li>Car Insurance</li>
            <li>Pocket Protect</li>
            <li>Direct Mutual Funds</li>
          </ul>
        </Col>

        <Col xs={12} md={3}>
          <Col className="fs-6 fw-bold" style={{ color: "#5665B0" }}>Resources</Col>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Help Center</li>
            <li>Support</li>
          </ul>
        </Col>
      </Col>

      {/* Copyright Text */}
      <Col xs={12} className="text-start mt-3">
        <p className="m-0 text-muted">© 2025 Fairnet. All rights reserved.</p>
      </Col>
      
    </Row>
  );
};

export default Footer;
