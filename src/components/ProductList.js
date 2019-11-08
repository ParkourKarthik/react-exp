import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBContainer } from 'mdbreact';

const ProductList = ({ productList }) => {
  const wrapTd = (text) => {
    return (<td>{text}</td>);
  }

  const lst = productList;
  let prdList = [];
  for (let i = 0; i < lst.length; i++) {
    let prd = [];
    for (const key in lst[i]) {
      if (key != "_id") {
        console.log("obj", lst[i][key]);
        prd.push(wrapTd(lst[i][key]));
      }
    }
    prdList.push(<tr>{prd}</tr>);
  }
  return (
    <MDBContainer>
      <MDBTable responsive="sm">
        <MDBTableHead>
          <tr>
            <th>Product Name</th>
            <th>MRP</th>
            <th>Selling Price</th>
            <th>Tax Percent</th>
          </tr>
        </MDBTableHead>
        <tbody>{prdList}</tbody>
      </MDBTable>
    </MDBContainer>
  )
}

export default ProductList;