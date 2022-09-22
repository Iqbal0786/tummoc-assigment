import axios from "axios";

export const LOADING="LOADING";
export const ERROR="ERROR";
export const SUCCESS="SUCCESS";

export const loading=()=>({type:LOADING});
export const error=()=>({type:ERROR});
export const success=()=>({type:SUCCESS})

export const Register_Request=(data)=>(dispatch)=>{
      dispatch(loading());
      axios.post("https://tummoc-db.herokuapp.com/register" , data).then((res)=>{
        alert("Registered Successfully !!")
        dispatch(success())
      }).catch((err)=>{
        console.log(err.message)
        dispatch(error())
      })
  

}