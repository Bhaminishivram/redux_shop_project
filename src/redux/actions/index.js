import { BUY_LAPTOP,BUY_MOBILE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAIL } from "./actionTypes" 
//import {BUY_MOBILE} from "./actionTypes";  
import axios from 'axios';
export const buyLaptop=()=>{
    return{
        type:BUY_LAPTOP
    }
}  
 
export const buyMobile=()=>{
    return{
        type:BUY_MOBILE
    }
}   
export const fetchUsersRequest =()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
} 
export const fetchUsersSuccess =(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
       data:users
    }
} 
export const fetchUsersFail =(error)=>{
    return{
        type:FETCH_USERS_FAIL,
        data:error
    }
}   

   export const fetchUsers =() =>{
    return function(dispatch){
        dispatch(fetchUsersRequest()); 
        axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(response =>{
               let users = response.data.map(users=>users.id); 
               dispatch(fetchUsersSuccess(users))
        }) 
        .catch(error=>{ 
            dispatch(fetchUsersFail(error))

        })
    }
}


