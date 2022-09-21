const express= require("express");
const connect =require("./configs/db")
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());







app.get("",async(req,res)=>{
  try {
    return res.send("Server is live now")
  } catch (error) {
    return res.send(error.message)
  }
})

const port=process.env.PORT||9999;
app.listen(port,async()=>{
    try {
         await connect();
         console.log("Listening the port number 9999");
    } catch (error) {
        console.log(error.message)
    }
})