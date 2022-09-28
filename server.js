
// require('dotenv').config()










// app.get('/employees', (req, res) => {
//     dataService.getAllEmployees()
//         .then(data => res.json(data))
//         .catch(err => console.log(err))

// })
// app.get('/managers', (req, res) => {
//     dataService.getManagers()
//         .then(data => res.json(data))
//         .catch(err => console.log(err))
// })
// app.get('/departments', (req, res) => {
//     dataService.getDepartments()
//         .then(data => res.json(data))
//         .catch(err => console.log(err))
// })
// app.get('*', function (req, res) {
//     res.sendFile('./views/404.html', { root: __dirname })
// })
// dataService.initialize()
//     .then(
//         app.listen(port, () => {
//             console.log(`Express http server listening on ${port}`)
//         })
//     )
//     .catch(err => console.log(err))







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


app.get('/employees', (req, res) => {
    dataService.getAllEmployees()
        .then(data => res.json(data))
        .catch(err => console.log(err))

})
app.get('/managers', (req, res) => {
    dataService.getManagers()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})
app.get('/departments', (req, res) => {
    dataService.getDepartments()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

//setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);