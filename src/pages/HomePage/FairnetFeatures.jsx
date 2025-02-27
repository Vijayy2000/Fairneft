import React from "react";
import { Row, Col } from "reactstrap";

const FairnetFeatures = () => {
  return (
    <div style={{background:"aliceblue"}}>
    <div className="container py-4 mt-5">
      <Row className="justify-content-center text-left text-md-start" >
        {/* Left Section */}
        <Col lg={4} md={12} className="mb-4">
          <h3 className="fw-bold text-dark">
            Empowering Your Financial Journey with{" "}
            <span style={{ color: "#77C476" }}>Trust, Transparency</span>, and{" "}
            <span style={{ color: "#77C476" }}>Tailored</span> Solutions
          </h3>
          <p className="text-gray" style={{ color: "grey" }}>
            At FairNeft, we believe in simplifying your financial decisions and
            providing solutions that truly matter. Here’s why you can trust us:
          </p>
        </Col>

        {/* Right Section */}
        <Col lg={7} md={12}>
          {[
            {
              title: "Tailored Solutions",
              description:
                "Whether you're investing, insuring, or borrowing, we offer personalized options that align with your unique needs and goals.",
            },
            {
              title: "Trusted Partners",
              description:
                "Partnered with leading financial institutions and insurers, ensuring you get the best products and services in the market.",
            },
            {
              title: "Transparency Guaranteed",
              description:
                "No hidden fees or surprises. Enjoy a clear, straightforward process for all your financial needs.",
            },
            {
              title: "Expert Guidance",
              description:
                "Our team of experts is here to guide you at every step, from choosing the right product to managing your finances efficiently.",
            },
            {
              title: "Seamless Experience",
              description:
                "With an intuitive platform and quick processing, we make managing your finances easy, accessible, and stress-free.",
            },
            {
              title: "Customer-Centric Approach",
              description:
                "Your satisfaction is our priority. We’re dedicated to delivering excellent service and unparalleled support.",
            },
          ].map((feature, index) => (
            <Row key={index} className="align-items-center">
              <Col md={5} sm={12} className="fw-bold" style={{ color: "#5665B0" }}>
                {feature.title}
              </Col>
              <Col md={7} sm={12}>
                {feature.description}
              </Col>
              <hr className="d-md-block " style={{ color: "#ACD1F4", borderWidth: "2px" }} />
            </Row>
          ))}
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default FairnetFeatures;
