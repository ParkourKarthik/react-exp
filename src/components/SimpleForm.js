import React from 'react';
import form from "../about_form.json";
import { MDBInput, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';


const getInputControl = (name, type, onchange) => (
  <MDBInput type={type} label={name} onChange={(e) => onchange}></MDBInput>
)


const SimpleForm = () => {
  const f = form;
  return (
    <MDBCard>
      <MDBCardHeader>{f.title}</MDBCardHeader>
      <MDBCardBody>
        <form>
          {f.controls.map((d) => (getInputControl(d.name,d.type, d.onchange)))}
        </form>
      </MDBCardBody>
    </MDBCard>
  )
}


export default SimpleForm;