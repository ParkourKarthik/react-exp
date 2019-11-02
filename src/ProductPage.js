import React from "react";
import ProductList from "./ProductList";
import ProductEntry from "./ProductEntry";
import result from "./prod-data.json";
import { MDBContainer, MDBRow } from "mdbreact";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleProductAdd = this.handleProductAdd.bind(this);
    this.state = {
      prList: result.ProductList,
    }
  }

  handleProductAdd(prd) {
    var prl = [];
    prl = this.state.prList.slice();
    prl.push(prd);
    this.setState({ prList: prl });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow className="mt-3">
          <ProductEntry onProductAdd={this.handleProductAdd} />
        </MDBRow>
        <MDBRow className="mt-3">
          <ProductList value={this.state.prList} />
        </MDBRow>
      </MDBContainer>
    )
  }
}


export default ProductPage;