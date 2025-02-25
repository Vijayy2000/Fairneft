import React from "react";
import { Row, Col, Input, Form, Label, FormGroup, Button } from "reactstrap";
import Logo from "../../assets/Images/HomePage/SupportFormLogo.svg";

const SupportForm = () => {
  return (
    <div className="container py-4">
      {/* Responsive Layout - Image on Top in Mobile View */}
      <Row className="justify-content-center align-items-center flex-column flex-md-row">
        {/* Form Section */}
        <Col md={6} xs={12} className="order-2 order-md-1">
          <h3 className="fw-bold text-center mb-3">
            We’re Here to Help – Reach Out for Support or Queries Anytime!
          </h3>
          <Form>
            <Row className="gy-3">
              <Col md={6} sm={12}>
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
              </Col>

              <Col md={6} sm={12}>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Email Address" />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Input type="textarea" name="message" id="message" placeholder="Your message" />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="agreement" id="agreement" /> 
                    You agree to our friendly privacy policy.
                  </Label>
                </FormGroup>
              </Col>

              <Col md={12} className="mt-3 d-flex justify-content-center">
                <Button className="rounded-5 w-100 w-md-50" style={{ background: "#77C476", border: "1px solid #77C476" }}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>

        {/* Image Section - Comes First on Mobile */}
        <Col md={6} xs={12} className="text-center mb-4 order-1 order-md-2">
          <img src={Logo} alt="Support Logo" className="img-fluid w-75" />
        </Col>
      </Row>
    </div>
  );
};

export default SupportForm;
