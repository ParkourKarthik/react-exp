import React from 'react';
import { Col, Form, Button } from "react-bootstrap";

class ProductEntry extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleProductAdd = this.handleProductAdd.bind(this);
    this.state = {};
  }

  handleProductAdd(e) {
    this.props.onProductAdd({productName: this.state.productName, productNumber: this.state.productNumber});
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Col><Form.Control placeholder="Product Name" name="productName" onChange={this.handleChange}></Form.Control></Col>
          <Col><Form.Control type="number" name="productNumber" onChange={this.handleChange} placeholder="Product Number"></Form.Control></Col>
          <Col><Button onClick={this.handleProductAdd}>Add</Button></Col>
        </Form.Row>
      </Form>
    )
  }
}

export default ProductEntry;