import axios from "axios";

export const LOADING="LOADING";
export const ERROR="ERROR";
export const SUCCESS="SUCCESS";

export const loading=()=>({type:LOADING});
export const error=()=>({type:ERROR});
export const success=(payload)=>({type:SUCCESS ,payload})

export const Register_Request=(data)=>(dispatch)=>{
      dispatch(loading());
      axios.post("http://localhost:9999/login" , data).then((res)=>{
        console.log(res.data)
        dispatch(success())
      }).catch((err)=>{
        console.log(err.message)
        dispatch(error())
      })
  

}