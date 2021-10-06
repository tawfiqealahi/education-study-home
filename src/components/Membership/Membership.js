import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Membership = () => {
    return (
        <div>
            <Banner></Banner>
            <>
            <h1>Membership Form</h1>
  <InputGroup size="lg" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-lg">Enter your full name</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Current Education:</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <br />
  <InputGroup size="sm">
    <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup> <br />
  <InputGroup size="sm">
    <InputGroup.Text id="inputGroup-sizing-lg">Confirm Password</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <Button className="px-5 my-4 bg-danger fw-bold"  variant="danger">LOG IN</Button>
</>
<Footer></Footer>
        </div>
    );
};

export default Membership;