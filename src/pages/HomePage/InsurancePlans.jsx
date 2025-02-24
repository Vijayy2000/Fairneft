import React from "react";
import { Row, Col } from "reactstrap";
import HomePageCards from "../../components/HomePageCards/HomePageCards";

const InsurancePlans = () => {


    const SumamryCards = [
        {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/umbrella.svg`,
            title: 'Term Life Insurance',
            description: 'Ensure your loved ones are financially protected even in your absence. Get comprehensive term life insurance with high coverage at affordable premiums.',
            price: 'Starting from ₹ 473/month*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/InvestmentPlan.svg`,
            title: 'Investment Plan',
            description: 'Explore tailored investment plans designed to grow your wealth and meet your financial goals. Whether it’s retirement, education, or a dream home, start investing today',
            price: 'Starting from ₹ 473/month*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/HealthInsurance.svg`,
            title: 'Health Insurance',
            description: 'Safeguard your health and finances with our health insurance plans. Cover medical expenses, hospital bills, and emergencies with ease',
            price: 'Starting @ ₹8/day*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/DirectMutualFunds.svg`,
            title: 'Direct Mutual Funds',
            description: 'Grow your wealth with direct mutual funds that offer higher returns by eliminating middleman costs. Simple, transparent, and efficient investing',
            price: 'Check your Investments',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/PocketProtect.svg`,
            title: 'Pocket protect',
            description: 'Guard your pocket essentials like wallets, cards, and mobile devices against theft or loss. Stay worry-free with our affordable pocket protect plans',
            price: 'Know More',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/CarInsurance.svg`,
            title: 'Car Insurance',
            description: 'Insure your vehicle against accidents, theft, and damages with our car insurance plans. Enjoy 24/7 assistance, cashless repairs, and quick claims.',
            price: 'View Prices *',
          }
          
    ]
  return (
    <>
      <Row className='mx-3'>
        <Row className="my-1">
          <Col md={3} className="text-dark fs-4 fw-bold">
            Build, Protect, and Prosper Seamlessly
          </Col>
        </Row>
        <Row className="my-1">
          <Col md={4} className="text-muted">
            Explore tailored investment options and insurance solutions to
            secure your future, protect what matters, and achieve financial
            peace of mind
          </Col>
        </Row>
        <Row>
            <HomePageCards data={SumamryCards}/>
        </Row>
      </Row>
    </>
  );
};

export default InsurancePlans;
