import React from "react";
import { Col, Row } from "reactstrap";

const HomePageCards = ({ data }) => {
  return (
    <Row className="px-4 " style={{ margin: "auto",width:"" }}>
      {data.map((card, index) => (
     

        <Col
          md={3}
          style={{ background: "", margin: "auto", minHeight:"300px",maxWidth:"300px", boxShadow:"1px 1px 5px black" }}
          className="p-5 m-3  rounded-5 "
        >
          <Col
            key={index}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Col>
              <img src={card.image} alt={card.title} />
            </Col>
            <Col style={{ color: "#5665B0" }}>{card.title}</Col>
            <Col className="" style={{ fontSize: "12px", textAlign: "center" }}>
              {card.description}
            </Col>
            <Col style={{ color: "#77C476" }} className="">{card.price}</Col>
          </Col>
        </Col>
      
      ))}
    </Row>
  );
};

export default HomePageCards;
