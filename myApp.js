let express = require('express');
let app = express();


console.log("Hello World")

//Serve an Html file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})

//serve static assests
abspath = __dirname +"/public"
app.use("/public", express.static(abspath))


//serve json
app.get("/json", function(req,res){
  res.json({"message": "Hello json"});
})

































 module.exports = app;
