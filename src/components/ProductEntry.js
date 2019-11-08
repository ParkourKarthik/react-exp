import React from 'react';
import { MDBContainer, MDBRow, MDBInput, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";

const ProductEntry = ({product, onChange, onProductAdd }) => (
  <MDBContainer>
    <MDBCard>
      <MDBCardHeader>Sales Entry</MDBCardHeader>
      <MDBCardBody>
        <form>
          <MDBRow>
            <MDBCol md="2">
              <MDBInput label="Product" name="ProductName" onChange={e => onChange(e)}></MDBInput>
            </MDBCol>
            <MDBCol md="2">
              <MDBInput type="number" name="MRP" onChange={e => onChange(e)} label="MRP"></MDBInput>
            </MDBCol>
            <MDBCol md="2">
              <MDBInput type="number" name="SellingPrice" onChange={e => onChange(e)} label="S.P"></MDBInput>
            </MDBCol>
            <MDBCol md="2">
              <MDBInput type="number" name="TaxPercent" onChange={e => onChange(e)} label="GST %"></MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn onClick={() => onProductAdd(product)} color="primary">Add</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>

)

export default ProductEntry;