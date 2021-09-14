import React from "react";
import { Jumbotron, Container, Form, Col, Button } from "react-bootstrap";
export default function Home() {
  return (
    <div>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search For Books!</h1>
          <Form>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
    </div>
  );
}
