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
 var HTTP_PORT = process.env.PORT || 8080;  
 var express = require('express'); 
 var app = express();
 var path = require('path');
 var dataService = require('./data-service')


 function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}


app.use(express.static('public'))


//setup route to listen on /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})


// setup another route to listen on /about
app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

 //Departments
 app.get('/departments', function(req,res){
    dataService.getDepartments().then((data) => {
        res.json(data);
    }).catch((err)=>{
        res.json({message: err});
    })
});


//Employees
app.get('/employees', function(req,res){
    dataService.getAllEmployees().then((data) => {
        res.json(data);
    }).catch((err)=>{
        res.json({message:err});
    })
});


//Managers
app.get('/managers', function(req,res){
    dataService.getManagers().then((data) => {
        res.json(data);
        console.log("TODO: get all employees who have isManager==true");
    }).catch((err)=>{
        res.json({message:err});
    })
});


 //get error 404
app.get("/*", function(req,res){
    res.status(404).json({ error: 'Page Not Found' })
});


//initialize
data_service.initialize().then(() => {
    app.listen(HTTP_PORT, onHttpStart);
}).catch(() => {
    console.log("Unable to load data");
});
