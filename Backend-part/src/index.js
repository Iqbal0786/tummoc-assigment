const express= require("express");
const connect =require("./configs/db");
const userController= require("./controllers/user.controller");
const passport= require("./configs/google.auth")
const {register,login} = require("./controllers/auth.controller")
const cors=require("cors");
const session= require("express-session")
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users" , userController)
app.post("/register", register);
app.post("/login" , login);
app.use(session({ secret: 'melody hensley is my spirit animal' }));

// google auth routes
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/',
        failureRedirect: '/auth/google/failure'
}));

app.get("/auth/google/success", (req,res)=>{
 
    return res.send({message:"logged in"})

})
passport.serializeUser(function(user,done){
  return done(null, user)
})
passport.deserializeUser(function(user,done){
    return done(null, user)
  })


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