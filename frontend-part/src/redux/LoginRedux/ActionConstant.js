import axios from "axios";

export const LOADING="LOADING";
export const ERROR="ERROR";
export const SUCCESS="SUCCESS";

export const loading=()=>({type:LOADING});
export const error=()=>({type:ERROR});
export const success=(payload)=>({type:SUCCESS ,payload})

export const Login_Request=(data ,naviagte)=>(dispatch)=>{
      dispatch(loading());
      axios.post("https://tummoc-db.herokuapp.com/login" , data).then((res)=>{
        alert("Logged In Successfully !!")
        dispatch(success(res.data))
        naviagte('/home')
      }).catch((err)=>{
        console.log(err.message)
        dispatch(error())
      })
  

}