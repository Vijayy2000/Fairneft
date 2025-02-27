import React from "react";
import { Row, Col, Container } from "reactstrap";

const HeroSection = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center justify-content-center text-center text-md-start">
        {/* Left Content Section */}
        <Col md={6} className="px-4">
          <h2 className="fs-3 fw-bold">
            Your Trusted{" "}
            <span style={{ color: "#77C476" }}>Financial Companion</span> – Tailored Solutions, Simplified
          </h2>
          <p className="text-muted">
            Find the perfect loan solutions designed for your needs. Empower your financial future with FairNeft’s trusted support.
          </p>

          {/* Features List */}
          <div className="d-flex align-items-center gap-2 my-2">
            <img src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/TickMark.svg`} alt="tick mark" />
            <span>Personalized Recommendations</span>
          </div>
          <div className="d-flex align-items-center gap-2 my-2">
            <img src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/TickMark.svg`} alt="tick mark" />
            <span>Wide Range of Financial Products</span>
          </div>
          <div className="d-flex align-items-center gap-2 my-2">
            <img src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/TickMark.svg`} alt="tick mark" />
            <span>Quick, Hassle-Free Approvals</span>
          </div>
        </Col>

        {/* Right Image Section */}
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/HeroSectionImage.svg`}
            alt="hero"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
