/************************************************************************* 
 *  WEB322– Assignment 2 
 * I declare that this assignment is my own work in accordance with Seneca Academic 
 Policy. No part * of this assignment has been copied manually or electronically from any
 other source 
 *  (including 3rd party web sites) or distributed to other students. 
 * 
 * Name: Melika Hamedani  Student ID: 175474212  Date: 02/10/2022 
 * 
 * Your app’s URL (from Cyclic) :
 * 
 * *************************************************************************/
var express = require("express"); 
var dataService = require('./data-service')
var app = express();
var path = require("path");
require('dotenv').config() 

var HTTP_PORT = process.env.PORT || 8080;  
console.log("Express http server listening on: " + HTTP_PORT);


app.use(express.static('public'))

//setup route to listen on /
app.get("/", function(req, res){
    res.redirect("/views/home.html");
    // res.sendFile(path.join(__dirname, "/views/home.html"));
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
         res.json({message:err});
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
         res.json({message: err});
     })
 });

 //get error 404
 app.use(function(req,res){
    res.status(404).json({
        status:'error',
     error:{
            message: 'Page Not Found',
            code: 404,
            },
    });
})

dataService.initialize().then(() => {
    app.listen(HTTP_PORT);
}).catch (() => {
    console.log("couldn't initialized the server" + err);
});

