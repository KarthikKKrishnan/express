import express from "express"
import router from "./router.js"
import fs from "fs"

const server = express()

server.use(express.json());
server.use(express.urlencoded({
    extended: true
}))

server.use("/",express.static("./static"));

server.use("/api",router)

server.use("/set-todo" ,(req, res)=>{
   fs.readFile("./data.json", "utf-8", (error, data)=>{
      if (error) {
         res.write("Error Occurred");
     }
     res.end();
   })
   .then(data =>{
      console.log(data);
      res.json(data);
   })

   
})


import express from "express";
import router from "./router.js";
import fs from "fs";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", express.static("./static"));

server.use("/api", router);

server.listen(3000, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server started on port 3000");
});


//  server.get("/api",(req,res) => {
//     console.log(req.query);
//     res.json("hello");
//  })

//  server.post("/api",(req,res)=> {
//     console.log(req.body);
//     res.json("post api")
//  })


 
 server.listen(3000,(error)=> {
    if(error){
        console.log(error);
        return;
        }
        console.log(`server started on port:3000`);
 });
