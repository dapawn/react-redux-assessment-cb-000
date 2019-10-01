import React from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';


 function Nav() { 
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        </Navbar>
        <br />
      </React.Fragment>
    )
  }

export default Nav;
