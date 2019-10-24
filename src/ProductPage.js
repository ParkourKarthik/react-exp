import React from "react";
import ProductList from "./ProductList";
import ProductEntry from "./ProductEntry";
import result from "./prod-data.json";

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
    this.setState({prList: prl});
  }

  render() {
    return (
      <>
        <ProductEntry onProductAdd={this.handleProductAdd} />
        <ProductList value={this.state.prList} />
      </>
    )
  }
}


export default ProductPage;