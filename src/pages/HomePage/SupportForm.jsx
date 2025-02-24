import React from "react";

import { Row, Col, Input, Form, Label, FormGroup, Button } from "reactstrap";
import Logo from "../../assets/Images/HomePage/SupportFormLogo.svg";

const SupportForm = () => {
  return (
    <>
      <Row className="my-3 mx-3">
        <Col md={6}>
          <Row></Row>
          <Col className="fs-3  fw-bold">
            We’re Here to Help – Reach Out for Support or Queries Anytime!
          </Col>
          <Form>
            <Row className="my-3">
              <Col md={5} >
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                  />
                </FormGroup>
              </Col>

              <Col md={5}>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Your message"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="agreement" id="agreement" /> I
                    You agree to our friendly privacy policy.
                  </Label>
                </FormGroup>
              </Col>
              <Col md={10} className="my-3">
              <Button className="rounded-5" style={{width:"200px", background:"#77C476" , border:"1px solid #77C476", }}>Sumit</Button>
              
              </Col>
            </Row>
          </Form>
        </Col>
        <Col>
          <img src={Logo} alt="Support Logo"></img>
        </Col>
      </Row>
    </>
  );
};

export default SupportForm;
