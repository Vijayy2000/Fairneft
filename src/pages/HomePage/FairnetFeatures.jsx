import React from "react";
import { Row, Col } from "reactstrap";

const FairnetFeatures = () => {
  return (
    <>
      <Row className="d-flex flex-row justify-content-between my-3 mx-3">
        <Col md={4} >
          <Col className="fs-3 text-dark fw-bold">
            Empowering Your Financial Journey with{" "}
            <span style={{ color: "#77C476" }}>Trust, Transparency</span> , and{" "}
            <span style={{ color: "#77C476" }}>Tailored</span> Solutions
          </Col>
          <Col className="text-gray" style={{ color: "grey" }}>
            At Fairnet we believe in simplifying your financial decisions and
            providing solutions that truly matter. Here’s why you can trust us:
          </Col>
          
        </Col>
       

        <Col md={7}>
          <Row>
            <Col md={5} className="fw-bold" style={{ color: "#5665B0" }}>
              Tailored Solutions
            </Col>
            <Col md={5}>
              Whether you're investing, insuring, or borrowing, we offer
              personalized options that align with your unique needs and goals.
            </Col>
            <hr style={{color:"#ACD1F4", borderWidth:"2px"}}/>
          </Row>

          <Row>
            <Col md={5} className="fw-bold" style={{ color: "#5665B0" }}>
              Trusted Partners
            </Col>
            <Col md={5}>
              Partnered with leading financial institutions and insurers,
              ensuring you get the best products and services in the market
            </Col>
            <hr style={{color:"#ACD1F4", borderWidth:"2px"}}/>
          </Row>
          <Row>
            <Col md={5} className="fw-bold" style={{ color: "#5665B0" }}>
              Transparency Guaranteed
            </Col>
            <Col md={5}>
              No hidden fees or surprises. Enjoy a clear, straightforward
              process for all your financial needs.
            </Col>
            <hr style={{color:"#ACD1F4", borderWidth:"2px"}}/>
          </Row>
          <Row>
            <Col md={5} className="fw-bold" style={{ color: "#5665B0" }}>
              Expert Guidance
            </Col>
            <Col md={5}>
              Our team of experts is here to guide you at every step, from
              choosing the right product to managing your finances efficiently
            </Col>
            <hr style={{color:"#ACD1F4", borderWidth:"2px"}}/>
          </Row>
          <Row>
            <Col md={5} className="fw-bold" style={{ color: "#5665B0" }}>
              Seamless Experience
            </Col>
            <Col md={5}>
              With an intuitive platform and quick processing, we make managing
              your finances easy, accessible, and stress-free
            </Col>
            <hr style={{color:"#ACD1F4", borderWidth:"2px"}}/>
          </Row>

          <Row>
            <Col md={5} className="fw-bold" style={{ color: "#5665B0" }}>
              Customer-Centric Approach
            </Col>
            <Col md={5}>
              Your satisfaction is our priority. We’re dedicated to delivering
              excellent service and unparalleled support
            </Col>
            <hr style={{color:"#ACD1F4", borderWidth:"2px"}}/>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FairnetFeatures;
