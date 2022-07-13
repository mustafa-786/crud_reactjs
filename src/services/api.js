import axios from "axios";

const API_URL='http://localhost:4000/library/add/student'
const get_users ='http://localhost:4000/library/get/student';
const get_user_by_id ='http://localhost:4000/library/get/student'
const edit_user_by_id ='http://localhost:4000/library/update'
const delete_user='http://localhost:4000/library/delete'
export  const addUsers = async (data) =>{
  try{             
  return await axios.post(API_URL,data)   
  } catch(e){
     console.log(e)          
  }          
}

 export const getAllUser =async () =>{
  try{
  return await axios.get(get_users);
  } catch(e){
    console.log(e)
  }
}

export const getUserById =async (id) =>{
  try{
   const res =await axios.get(`${get_user_by_id}/${id}`)
   return res;
  }  catch(e){
   console.log(e) 
  }
}

export const updateUser =async (id,data) =>{
  try{
    const res =await axios.post(`${edit_user_by_id}/${id}/student`,data)
    return res;
   }  catch(e){
    console.log(e) 
   }
}

export const deleteUser =async (id) =>{
  try{
   return await axios.delete(`${delete_user}/${id}/student`)
  } catch(e){

  }
} 