import React, { useState,  } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { addUsers } from "../services/api";
import {useNavigate} from 'react-router-dom'
const AddUser = () => {
  const [user, setuser] = useState();
  const navigate =useNavigate();

  function getValue(e) {
    //e.target.name is a variable if u want to use as a key put into [] brackets
    //...user destructing  wants previous value
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  const addUser = async (e) => {
    try {
      e.preventDefault();
      await addUsers(user);
      navigate('../users');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => getValue(e)}
              name="name"
              className="w-50"
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enrollnment No</Form.Label>
            <Form.Control
              onChange={(e) => getValue(e)}
              name="enrollment_no"
              className="w-50"
              type="text"
              placeholder="Enrollnment No"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Department</Form.Label>
            <Form.Control
              onChange={(e) => getValue(e)}
              name="department"
              className="w-50"
              type="text"
              placeholder="Department"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Semester</Form.Label>
            <Form.Control
              onChange={(e) => getValue(e)}
              name="semester"
              className="w-50"
              type="text"
              placeholder="Sememster"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => getValue(e)}
              name="contact"
              className="w-50"
              type="text"
              placeholder="Phone"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => getValue(e)}
              name="email"
              className="w-50"
              type="text"
              placeholder="Email"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => addUser(e)}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddUser;
