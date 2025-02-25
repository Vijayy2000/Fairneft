import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./LoanPlans.scss"; 


const loanPlans = [
  {
    image: "/assets/Images/HomeCardsImages/PersonalLoan.svg",
    title: "Personal Loan",
    description: "Select the best offer curated just for you from a wide choice of banks and NBFC’s",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/BussinessLoan.svg",
    title: "Business Loans (Secured & Unsecured)",
    description: "Expand your business with loans at low interest rates",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/OverDraft.svg",
    title: "Overdraft",
    description: "Get instant access to extra funds with an overdraft facility, allowing you to borrow as needed up to a pre-approved limit.",
    link: "Learn More",
  },
  {
    image: "/assets/Images/HomeCardsImages/HomeLoan.svg",
    title: "Home Loan",
    description: "Choose from lowest interest rates available for your dream home",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/LoanAganistProperty.svg",
    title: "Loan Against Property",
    description: "Get liquidity against your property at best interest rates",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/ProfessionalLoan.svg",
    title: "Professional Loans",
    description: "Empower your career with a Professional Loan - tailored financial support for doctors, lawyers, and self-employed professionals",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/EducationalLoan.svg",
    title: "Education Loans",
    description: "Invest in your future with an Education Loan - flexible funding for tuition, books, and living expenses",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/machineryLoan.svg",
    title: "Machinery Loans",
    description: "Upgrade your business with a Machinery Loan - easy financing for new equipment and technology.",
    link: "Check Eligibility",
  },
  {
    image: "/assets/Images/HomeCardsImages/VechileLoan.svg",
    title: "Vehicle Loans",
    description: "Drive your dreams with a Vehicle Loan—affordable financing for cars, bikes, and commercial vehicles",
    link: "Check Eligibility",
  },
];

const LoanPlans = () => {
  return (
    <Container>
      <Row className="text-left my-4">
        <Col>
          <h2 className="fw-bold">
            Find the Perfect <span style={{ color: "#77C476" }}>Credit Solution</span> for Every Need
          </h2>
          <p className="text-muted">
            From personal loans to home loans, we’ve got you covered. Explore tailored credit options with ease and transparency.
          </p>
        </Col>
      </Row>

      <Row className="loan-container">
        {loanPlans.map((loan, index) => (
          <Col key={index} xs="12" sm="6" md="6" lg="4" className="loan-item">
            <div className="loan-card">
              <img src={loan.image} alt={loan.title} className="loan-icon" />
              <h5 className="loan-title">{loan.title}</h5>
              <p className="loan-description">{loan.description}</p>
              <a href="#" className="loan-link">
                {loan.link} →
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LoanPlans;
