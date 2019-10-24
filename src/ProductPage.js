import React from "react";
import ProductList from "./ProductList";
import ProductEntry from "./ProductEntry";
import jsn from "./prod-data.json";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleProductAdd = this.handleProductAdd.bind(this);
    this.state = {
      prList: jsn.productList,
    }
  }

  handleProductAdd(prd) {
    var prl = [];
    prl = this.state.prList.slice();
    prl.push(prd);
    this.setState({prList: prl});
    console.log(JSON.stringify(this.state.prList));
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