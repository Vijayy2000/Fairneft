import React from "react";
import { Col } from "reactstrap";

import Footer from "./Footer";
import SupportForm from "./SupportForm";
import FairnetFeatures from "./FairnetFeatures";
import InsurancePlans from "./InsurancePlans";
import LoanPlans from "./LoanPlans";
import LoanForm from "./LoanForm";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <Col className="mx-">
      <NavBar/>
      <HeroSection/>

      <LoanPlans/>
      <LoanForm />
        <InsurancePlans />

        <FairnetFeatures  />

        <SupportForm />
        <Footer />
      </Col>
    </>
  );
};

export default HomePage;
