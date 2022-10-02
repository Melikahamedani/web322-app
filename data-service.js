const fs = require('fs');
let employees = [];
let departments = [];


//initialize()
module.exports.initialize = function () {
    return new Promise((resolve, reject) => {
        try{
            fs.readFile("./data/employees.json", (err, data) => {
                if (err) reject("Failure to read file employees.json!");
                employees = JSON.parse(data);
                resolve();
              });
              fs.readFile("./data/departments.json", (err, data) => {
                if (err) reject("Failure to read file departments.json!");
                programs = JSON.parse(data);
              });
        }
        catch(err){
            reject("unable to read file")
            console.log("unable to read file");
        }
      resolve("Success");
    });
  };


//getAllEmployees
module.exports.getAllEmployees = function() {
    return new Promise((resolve, reject) => {
        if (employees.length === 0){
            reject('no results returned');
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
            if (element.isManager ===true){
                managers.push(element[i]) 
            }
        }
        if (managers.length === 0) {
            reject('no results returned');
        }
        else{
            resolve(managers);
        }
    })
};


//getDepartments
module.exports.getDepartments = function (){
    return new Promise((resolve, reject) => {
        if (departments.length === 0){
            reject('no results returned');
        } 
        else{
            resolve(departments);
        }
    })
};

