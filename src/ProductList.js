import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  wrapTd(text) {
    return (<td>{text}</td>);
  }

  render() {
    let lst = this.props.value;
    let prdList = [];
    for (let i = 0; i < lst.length; i++) {
      let prd = [];
      for(const key in lst[i]){
        console.log("obj",lst[i][key]);
        prd.push(this.wrapTd(lst[i][key]));
      }
      prdList.push(<tr>{prd}</tr>);
    }
    return (
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>MRP</th>
              <th>Selling Price</th>
              <th>Tax Percent</th>
            </tr>
          </thead>
          <tbody>{prdList}</tbody>
        </Table>
      </div>
    )
  }
}

export default ProductList;