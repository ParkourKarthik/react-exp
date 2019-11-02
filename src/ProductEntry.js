import React from 'react';
import { MDBContainer, MDBRow, MDBInput, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";

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
      <MDBContainer>
        <MDBCard>
          <MDBCardHeader>Sales Entry</MDBCardHeader>
          <MDBCardBody>
            <form>
              <MDBRow>
                <MDBCol md="2">
                  <MDBInput label="Product" name="ProductName" onChange={this.handleChange}></MDBInput>
                </MDBCol>
                <MDBCol md="2">
                  <MDBInput type="number" name="MRP" onChange={this.handleChange} label="MRP"></MDBInput>
                </MDBCol>
                <MDBCol md="2">
                  <MDBInput type="number" name="SellingPrice" onChange={this.handleChange} label="S.P"></MDBInput>
                </MDBCol>
                <MDBCol md="2">
                  <MDBInput type="number" name="TaxPercent" onChange={this.handleChange} label="GST %"></MDBInput>
                </MDBCol>
                <MDBCol md="4">
                <MDBBtn onClick={this.handleProductAdd} color="primary">Add</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

    )
  }
}

export default ProductEntry;