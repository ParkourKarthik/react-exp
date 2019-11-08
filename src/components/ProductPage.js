import React from "react";
import ProductList from "../containers/ProductList";
import ProductEntry from "../containers/ProductEntry";
import { MDBContainer, MDBRow } from "mdbreact";

const ProductPage = () => (
  <MDBContainer>
    <MDBRow className="mt-3">
      <ProductEntry />
    </MDBRow>
    <MDBRow className="mt-3">
      <ProductList />
    </MDBRow>
  </MDBContainer>
)


export default ProductPage;