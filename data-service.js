const fs = require('fs');
let employees = [];
let departments = [];


//initialize()
module.exports.initialize =function () {
    return new Promise ((resolve, reject) => {
        try{
            fs.readFile("./data/employees.json", (err, data) => {
                if (err) reject("Unable to read the file");
                resolve();
              });
              fs.readFile("./data/programs.JSON", (err, data) => {
                programs = JSON.parse(data);
              });
        }catch(err){
                reject("unable to read file")
            }
        resolve("success");
    })
};


//getAllEmployees
exports.getAllEmployees = function() {
    return new Promise((resolve, reject) => {
        if (employees.length == 0){
            reject(Error("no results returned"))
        } 
        else{
            resolve(employees);
        }
    })
};


//getManagers
exports.getManagers = function() {
    return new Promise((resolve, reject) => {
        const managers = []
        for (let i = 0; i < employees.length; i++) {
            const element = employees[i];
            if (element.isManager){
                managers.push(element) 
            }
        }
        if (managers.length == 0) {
            reject(Error("no results returned"))
        }
        else{
            resolve(managers);
        }
    })
};


//getDepartments
exports.getDepartments = function (){
    return new Promise((resolve, reject) => {
        if (departments.length == 0){
            reject(Error("no results returned"))
        } 
        else{
            resolve(departments);
        }
    })
};

