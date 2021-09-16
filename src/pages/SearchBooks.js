import React, { useState } from "react";
import { Jumbotron, Container, Form, Col, Button } from "react-bootstrap";
import { searchGoogleBooks } from "../utils/API";
export default function SearchBooks() {
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchGoogleBooks(searchInput).then((books) => {
      books.json().then((value) => {
        const { items } = value;
        setSearchedBooks(items);
      });
    });
  };

  return (
    <div>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search For Books!</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a book"
                />
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
