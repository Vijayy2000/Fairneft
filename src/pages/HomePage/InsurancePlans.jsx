import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./InsurancePlans.scss"; 

const InsurancePlans = () => {
  const insurancePlans = [
    {
      image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/umbrella.svg`,
      title: "Term Life Insurance",
      description: "Ensure your loved ones are financially protected even in your absence. Get comprehensive term life insurance with high coverage at affordable premiums.",
      price: "Starting from ₹ 473/month*",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/InvestmentPlan.svg`,
      title: "Investment Plan",
      description: "Explore tailored investment plans designed to grow your wealth and meet your financial goals. Start investing today.",
      price: "Starting from ₹ 473/month*",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/HealthInsurance.svg`,
      title: "Health Insurance",
      description: "Cover medical expenses, hospital bills, and emergencies with ease.",
      price: "Starting @ ₹8/day*",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/DirectMutualFunds.svg`,
      title: "Direct Mutual Funds",
      description: "Grow your wealth with direct mutual funds that offer higher returns by eliminating middleman costs.",
      price: "Check your Investments",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/PocketProtect.svg`,
      title: "Pocket Protect",
      description: "Guard your pocket essentials like wallets, cards, and mobile devices against theft or loss.",
      price: "Know More",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/CarInsurance.svg`,
      title: "Car Insurance",
      description: "Insure your vehicle against accidents, theft, and damages with our car insurance plans.",
      price: "View Prices *",
    },
  ];

  return (
    <Container>
      {/* Heading Section */}
      <Row className="text-left my-4">
        <Col>
          <h2 className="fw-bold">
            Build, Protect, and <span style={{ color: "#77C476" }}>Prosper</span> Seamlessly
          </h2>
          <p className="text-muted">
            Explore tailored investment options and insurance solutions to secure your future, protect what matters, and achieve financial peace of mind.
          </p>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className="insurance-container">
        {insurancePlans.map((plan, index) => (
          <Col key={index} xs="12" sm="6" md="6" lg="4" className="insurance-item">
            <div className="insurance-card">
              <img src={plan.image} alt={plan.title} className="insurance-icon" />
              <h5 className="insurance-title">{plan.title}</h5>
              <p className="insurance-description">{plan.description}</p>
              <span className="insurance-price">{plan.price}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InsurancePlans;
