import React from 'react';
import form from "../about_form.json";
import { MDBInput, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';


const getInputControl = (name, type) => (
  <MDBInput type={type} label={name}></MDBInput>
)


const SimpleForm = () => {
  const f = form;
  return (
    <MDBCard>
      <MDBCardHeader>{f.title}</MDBCardHeader>
      <MDBCardBody>
        <form>
          {f.controls.map((d) => (getInputControl(d.name,d.type)))}
        </form>
      </MDBCardBody>
    </MDBCard>
  )
}


export default SimpleForm;