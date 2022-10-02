
var express = require("express"); 
var dataService = require('./data-service')
var app = express();
var path = require("path"); 
var HTTP_PORT = process.env.PORT || 8080;  


function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'))

// setup route to listen on /home
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

// setup another route to listen on /about
app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

//Employees
app.get("/employees", function(req,res){
    dataService.getCategories().then((data) => {
         res.json(data);
         }).catch((err)=>{
         res.json(err);
     })
 });

//Managers
app.get("/managers", function(req,res){
    dataService.getCategories().then((data) => {
         res.json(data);
         console.log("TODO: get all employees who have isManager==true");
         }).catch((err)=>{
         res.json(err);
     })
 });

 //Departments
app.get("/departments", function(req,res){
    dataService.getCategories().then((data) => {
         res.json(data);
         }).catch((err)=>{
         res.json(err);
     })
 });


 app.use(function(req,res){
     res.status(404).json({
         status:'error',
      error:{
             message: 'Page not found',
             code: 404,
             },
     });
 })
 
 app.use(function(req,res){
    res.status(404).json({
        status:'error',
     error:{
            message: 'Page not found',
            code: 404,
            },
    });
})

blogService.initialize().then(() => {
    app.listen(HTTP_PORT);
}).catch (() => {
    console.log("couldn't initialized the server" + err);
});