import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { productList } from "./prod-data.json";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var lst = this.props.value;
    var prd = [];
    for (const key in lst) {
      if (lst.hasOwnProperty(key)) {
        prd.push(<ListGroupItem key={key}>{lst[key].productName}</ListGroupItem>);
      }
    }
    return (
      <ListGroup title="grp1">{prd}
      </ListGroup>
    )
  }
}

export default ProductList;