const express =require("express");

const app=express();

const path=require("path");

const userRoutes=require("./routes/user");

app.set("view engine","ejs");

app.use("/libs",express.static(path.join(__dirname,"node_modules")));
app.use("/static",express.static(path.join(__dirname,"public")));

app.use(userRoutes);



app.listen(3000,function(){
    console.log("listening port at 3000")
})
//arda