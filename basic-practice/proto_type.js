//undersatnding prototype func 

const employee = {
    calctax() {
        console.log("the tax is 10%")
    }
};

karan  = {
    salary:50000
};

karan.__proto__ = employee; // this makes we cna use th func of emploee in karan object 