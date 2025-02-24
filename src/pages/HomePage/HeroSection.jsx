import React from "react";
import { Row, Col } from "reactstrap";

const HeroSection = () => {
  return (
    <>
      <Row className="d-flex flex-row justify-content-  mx-3" >
        <Col md={4}>
          <Row>
            <Col  className="fs-4 fw-bold my-2">
              Your Trusted{" "}
              <span style={{ color: "#77C476" }}>Financial Companion</span> –
              Tailored Solutions, Simplified
            </Col>

            <Row>
              <Col  className="text-muted my-2">
                Find the perfect loan solutions designed for your needs. Empower
                your financial future with Fairnet’s trusted support.
              </Col>
            </Row>

            <Row className="my-2">
              <Col>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/TickMark.svg`}
                  alt="tick mark"
                />
                <span>Personalized Recommendations</span>
              </Col>
            </Row>

            <Row className="my-2">
              <Col>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/TickMark.svg`}
                  alt="tick mark"
                />
                <span>Wide Range of Financial Products</span>
              </Col>
            </Row>

            <Row className="my-2">
              <Col>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/TickMark.svg`}
                  alt="tick mark"
                />
                <span>Quick, Hassle-Free Approvals</span>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col md={4} className="px-2">
        <img src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/HeroSectionImage.svg`} alt ="hero"/>
        
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
