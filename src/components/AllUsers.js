import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { deleteUser, getAllUser, getUserById } from "../services/api";
import {Button} from "react-bootstrap";
import {useParams, Link} from 'react-router-dom';
const AllUsers = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = async () => {
    try {
      let response = await getAllUser();
      setUser(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

 const deteteUserData =async  (id) =>{
  try{
    await deleteUser(id);
    allUsers();
  } catch(e){
   console.log(e) 
  }
 }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Enrollnment No</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.enrollment_no}</td>
                <td>{user.department}</td>
                <td>{user.semester}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant="primary" as={Link} to={`/edit/${user.id}`} type="submit">
                   Edit
                  </Button>
                </td>
                <td><Button onClick={()=>deteteUserData(user.id)} variant="danger" type="submit">
                   Delete
                  </Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
