import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../../images/logo/logo.jpg";

const Footer = () => {
  return (
    <div>
      <Card style={{ height: 250, width: "100%" }} className="bg-dark">
        <Row style={{ columnGap: 200, marginTop: 10 }}>
          <Col className="text-start">
            <Card.Img
              variant="top"
              src={logo}
              style={{ width: 100, marginTop: 10, marginLeft: 10 }}
            />
          </Col>
          <Col className="d-flex justify-content-between">
            <div className="text-start">
              <Card.Text className="text-white">
                About online Services
              </Card.Text>
              <Card.Text className="text-white">Read Our Blog</Card.Text>
              <Card.Text className="text-white">
                Sign Up To Access Services
              </Card.Text>
              <Card.Text className="text-white">Add Your Feedback</Card.Text>
            </div>
            <div className="text-start" style={{ marginRight: 50 }}>
              <Card.Text className="text-white">Get help</Card.Text>
              <Card.Text className="text-white">Read FAQs</Card.Text>
              <Card.Text className="text-white">View all Cities</Card.Text>
              <Card.Text className="text-white">Clinic Near Me</Card.Text>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Card.Body className="text-white ">
          <Row className="d-flex justify-content-between">
            <Col className="text-start" style={{ color: " gray" }}>
              Copyright © 2021 Developer Afjol ahmed
            </Col>
            <Col
              className="d-flex text-end justify-content-center"
              style={{ columnGap: 50 }}
            >
              <Card.Text>Privacy Policy</Card.Text>
              <Card.Text>Terms of Use</Card.Text>
              <Card.Text>Pricing</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
