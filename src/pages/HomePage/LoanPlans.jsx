import React from 'react'
import {Col,Row} from "reactstrap"
import HomePageCards from '../../components/HomePageCards/HomePageCards'

const LoanPlans = () => {

    const SumamryCards = [
        {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/PersonalLoan.svg`,
            title: 'Personal Loan',
            description: 'Select the best offer curated just for you from a wide choice of banks and NBFC’s',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/BussinessLoan.svg`,
            title: 'Business Loans (Secured & Unsecured)',
            description: 'Expand your business with loans at low interest rates ',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/OverDraft.svg`,
            title: 'Overdraft',
            description: 'Get instant access to extra funds with an overdraft facility, allowing you to borrow as needed up to a pre-approved limit.',
            price: 'Check Eligibility*',
           
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/HomeLoan.svg`,
            title: 'Home Loan',
            description: 'Choose from lowest interest rates available from your dream home',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/LoanAganistProperty.svg`,
            title: 'Loan Aganist Property',
            description: 'Get liquidity against your property at best interest rates',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/ProfessionalLoan.svg`,
            title: 'Professional Loan',
            description: 'Empower your career with a Professional Loan - tailored financial support for doctors, lawyers, and self-employed professionals',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/EducationalLoan.svg`,
            title: 'Educational Loan',
            description: 'Invest in your future with an Education Loan - flexible funding for tuition, books, and living expenses',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/VechileLoan.svg`,
            title: 'Vechile Loan',
            description: 'Drive your dreams with a Vehicle Loan—affordable financing for cars, bikes, and commercial vehicles',
            price: 'Check Eligibility*',
          },
          {
            image: `${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/machineryLoan.svg`,
            title: 'Machinery Loan',
            description: 'Upgrade your business with a Machinery Loan - easy financing for new equipment and technology.',
            price: 'Check Eligibility*',
          },
          
    ]
  return (
   <>

   <Row className='mx-3'>
    <Col md={4} className='fs-4 fw-bold'>Find the Perfect <span style={{color:"#77C476"}}>Credit Solution</span> for Every Need</Col>
   </Row>
   <Col md={5} className='text-muted mx-5'>From personal loans to home loans, we’ve got you covered. Explore tailored credit options with ease and transparency</Col>

   <Row className='mx-3'>

    <Col md = {12} style={{margin:"auto"}}>
    <HomePageCards data={SumamryCards}/>
    
    </Col>
   </Row>
  
   
   </>
  )
}

export default LoanPlans