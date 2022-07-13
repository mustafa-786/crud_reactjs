import {useParams} from 'react-router-dom';

const User =() =>{
    
      const {id} =useParams();
      console.log(id);
      return <>
      <h1>Users Name is: {id}</h1>
      </>         
}

export default User;