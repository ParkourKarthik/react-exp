import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";

class ProductEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleProductAdd = this.handleProductAdd.bind(this);
    this.state = {};
  }

  handleProductAdd(e) {
    console.log("prd", this.state.Product);
    this.props.onProductAdd(this.state.Product);
  }

  handleChange(e) {
    let prn = e.target.name;
    let prd = e.target.value;
    this.setState(prevState => ({
      Product: { ...prevState.Product, [prn]: prd }
    }));
  }

  render() {
    return (
      <Form>
        <Form.Row ref={this.refDev}>
          <Col><Form.Control placeholder="Product Name" name="ProductName" onChange={this.handleChange}></Form.Control></Col>
          <Col><Form.Control type="number" name="MRP" onChange={this.handleChange} placeholder="MRP"></Form.Control></Col>
          <Col><Form.Control type="number" name="SellingPrice" onChange={this.handleChange} placeholder="Selling Price"></Form.Control></Col>
          <Col><Form.Control type="number" name="TaxPercent" onChange={this.handleChange} placeholder="Tax Percent"></Form.Control></Col>
          <Col><Button onClick={this.handleProductAdd}>Add</Button></Col>
        </Form.Row>
      </Form>
    )
  }
}

export default ProductEntry;