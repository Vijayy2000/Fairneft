// import React from "react";
// import { Row, Col, Button } from "reactstrap";

// const NavBar = () => {
//   return (
//     <>
//       <Row className="d-flex flexx-row justify-content-between">
//         <Col md={2}>
//           <img
//             src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/Fairnet-Logo-Final.svg`}
//             alt="Logo"
//             height="40px"
//             width="200px"
//           ></img>
//         </Col>

//         <Col md={5} className="d-flex flex-row justify-content-center">
//           <Col md={2}>Home</Col>
//           <Col md={2}>About Us</Col>
//           <Col md={2}>Product</Col>
//           <Col md={2}>Contact</Col>
//           <Col md={2}>FAQ</Col>
//         </Col>
//         <Col md={5}>
//           <Button>LogIn</Button>
//           <Button>Register</Button>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default NavBar;


import React from "react";
import { Row, Col, Button } from "reactstrap";

const NavBar = () => {
  return (
    <>
      <Row className="d-flex align-items-center justify-content-between"  style={{background:"#5665B0", marginLeft:"2px", marginRight:"2px",height:"60px"}} >
        {/* Logo on the left */}
        <Col md={2} className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/HomeCardsImages/FairNetLogoHead.svg`}
            alt="Logo"
            height="40px"
            width="200px"
          />
        </Col>

        {/* Center navigation options */}
        <Col md={5} className="d-flex justify-content-evenly">
          <Col md="auto" className="text-center">Home</Col>
          <Col md="auto" className="text-center">About Us</Col>
          <Col md="auto" className="text-center">Product</Col>
          <Col md="auto" className="text-center">Contact</Col>
          <Col md="auto" className="text-center">FAQ</Col>
        </Col>

        {/* Buttons on the right */}
        <Col md={3} className="d-flex justify-content-end">
          <Button color="" className="me-2">LogIn</Button>
          <Button color="success" className="rounded-4">Register</Button>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
