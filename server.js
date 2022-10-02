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
let HTTP_PORT = process.env.PORT || 8080;
let express = require("express");
let app = express();
let path = require("path");
let dataService = require("./data-service");

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('./public/site.css'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

app.get("/departments", function(req,res){
    dataService.getDepartments().then((data) =>{
        res.json(data);
    }).catch((err)=>{
        res.json({ error: err });
    })
});

app.get("/employees", function(req,res){
    console.log("---------");
    dataService.getAllEmployees().then((data) => {
        res.json(data);
    }).catch((err) =>{
        res.json({ error: err })
    })
});

app.get("/managers", function(req,res){
    dataService.getManagers().then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({ error: err })
    })
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,"/public/image/404.jpg"));
})


dataService.initialize().then(() => {
    app.listen(HTTP_PORT, onHttpStart);
}).catch(() => {
    console.log("Unable to load data");
});
