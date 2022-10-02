const fs = require('fs');
let employees = [];
let departments = [];


//initialize()
module.exports.initialize =function () {
    return new Promise ((resolve, reject) => {
        try{
            fs.readFile('./data/employees.json', (err,data) => {
            if (err) 
            throw err;
            employees = JSON.parse(data);         
        })

            fs.readFile('./data/departments.json', (err,data)=> {
            if (err)
            throw (err);
            departments = JSON.parse(data);         
            })
        }catch(err){
                reject("unable to read file")
            }
        resolve("success");
    })
}


//getAllEmployees
exports.getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        if (employees.length == 0){
            reject(Error("no results (employees) returned"))
            resolve(employees)
        } 
    })
}


//getManagers
exports.getManagers = () => {
    return new Promise((resolve, reject) => {
        const managers = []
        for (let i = 0; i < employees.length; i++) {
            const element = employees[i];
            if (element.isManager){
                managers.push(element) 
            }
        }
        if (managers.length == 0) {
            reject(Error("no results (managers) returned"))
            resolve(managers)
        }
    })
}


//getDepartments
exports.getDepartments = () => {
    return new Promise((resolve, reject) => {
        if (departments.length == 0){
            reject(Error("no results (departments) returned"))
            resolve(departments)
        } 
    })
}



