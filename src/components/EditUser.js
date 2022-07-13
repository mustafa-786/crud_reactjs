import React, { useEffect, useState,  } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { addUsers, getUserById, updateUser } from "../services/api";
import {useNavigate,useParams,} from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  //const [user, setuser] = useState();
  const navigate =useNavigate();
  const id = useParams();
  const [users,setUser] = useState();


  useEffect(()=>{
  loadUser();
  },[])

  
  const loadUser =async () =>{
    try{     

      //const data =await axios.get(`http://localhost:4000/library/get/student/${id.id}`)        
      const response =await getUserById(id.id);
      const {data} =response.data
      setUser(data);
     console.log(data);
    } catch(e){
     console.log(e)          
    }
  }
  function getValue(e) {
    //e.target.name is a variable if u want to use as a key put into [] brackets
    //...user destructing  wants previous value
    setUser({ ...users, [e.target.name]: e.target.value });
  }

  const EditUser = async (e) => {
    try {
     e.preventDefault();

      await updateUser(id.id,users);
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
              value={users?.name}
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
              value={users?.enrollment_no}
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
              value={users?.department}
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
              value={users?.semester}
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
              value={users?.contact}
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
              value={users?.email}
              placeholder="Email"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => EditUser(e)}>
            Edit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditUser;
