let fs = require('fs');
let employees = [];
let departments = [];


//initialize()
  module.exports.initialize = function(){
    return new Promise((resolve, reject) => {
        try {
            fs.readFile("./data/employees.json", 'utf8',
                (err, data) => {
                    if (err) throw "Failure to read file employees.json!";
                    employees = JSON.parse(data);
                    
                });
            fs.readFile("./data/departments.json", 'utf8',
                (err, data) => {
                    if (err)throw "Failure to read file departments.json!";
                    departments = JSON.parse(data);

                });
        } catch (err) {
            reject("unable to read files.");
        }
        resolve("Read Success");
    })
};


//getAllEmployees
module.exports.getAllEmployees = function() {
    return new Promise((resolve, reject) => {
        debugger;
        if (employees.length === 0){
            reject('no results returned');
        } 
        else{
            resolve(employees);
        }
    });
}


// getManagers
module.exports.getManagers = function() {
    return new Promise((resolve, reject) => {
        let managers = []
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].isManager === true) {
                managers.push(employees[i]);
            }
        }
        if (managers.length === 0) {
            reject('no results returned');
        }
        resolve(managers);
    });
}


//getDepartments
module.exports.getDepartments = function (){
    return new Promise((resolve, reject) => {
        if (departments.length === 0){
            reject('no results returned');
        } 
        else{
            resolve(departments);
        }
    });
}
