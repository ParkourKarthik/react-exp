import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
import ProductPage from './ProductPage';
import About from './About';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { MDBContainer } from 'mdbreact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <LinkContainer to="/">
            <div>React-Exp</div>
          </LinkContainer>
        </Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
            <Nav.Link>Product</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <MDBContainer>
        <Route path="/product" component={ProductPage} />
        <Route path="/about" component={About} />
        </MDBContainer>
      </div>

    </Router>
  );
}

export default App;
