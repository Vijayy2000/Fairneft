import React from "react";
import { Row, Col } from "reactstrap";
import Logo from "../../assets/Images/HomePage/FooterLogo.svg";

const Footer = () => {
  return (
    <Row className="d-flex flex-row justify-content-evenly align-items-start mx-3  my-4">
      <Col md={4} className="p-">
        <img src={Logo} alt="footer Logo" />
      </Col>

      <Col md={8} className="d-flex flex-row justify-content-end p-2">
        <Row>
          <Col md={4}>
           <Col className=" fs-6" style={{color:"#5665B0"}}>Credit Solutions</Col>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Personal Loan</li>
              <li>Home Loan</li>
              <li>Gold Loan</li>
              <li>Business Loan</li>
              <li>Micro Loan</li>
            </ul>
          </Col>

          <Col md={6}>
          <Col className=" fs-6" style={{color:"#5665B0"}}>Investments & Insurances</Col>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Term Life Insurance</li>
              <li>Health Insurance</li>
              <li>Investment Plan</li>
              <li>Car Insurance</li>
              <li>Pocket Protect</li>
              <li>Direct Mutual Funds</li>
            </ul>
          </Col>

          <Col md={2}>
            <Col className=" fs-6" style={{color:"#5665B0"}}>Resources</Col>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
