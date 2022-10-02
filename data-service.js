const fs = require('fs');
let employees = [];
let departments = [];


//initialize()
module.exports.initialize = function () {
    return new Promise((resolve, reject) => {
      fs.readFile("./data/employees.json", (err, data) => {
        if (err) reject("Failure to read file employees.json!");
        employees = JSON.parse(data);
        resolve();
      });
      fs.readFile("./data/departments.json", (err, data) => {
        if (err) reject("Failure to read file departments.json!");
        programs = JSON.parse(data);
      });
      resolve();
    });
  };


//getAllEmployees
module.exports.getAllEmployees = function() {
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
module.exports.getManagers = function() {
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

