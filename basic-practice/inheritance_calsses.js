class parents {
    hello() {
        console.log("hello")
    }
}

class child extends parents { // here extends means the functions are tranferred parents to child  

}

let obj = new child()

//now learning the super() this is the constructor invoked from parent class when we are using extends function 
class person {
    constructor() {
        console.log("enterning the constructor of parent")
        this.species="homo sapeins"
    }

    eat() {
        console.log("eat")
    }

}

class engineer extends person {
    constructor(branch) {
        console.log("entering the child constructor")
        super()
        this.branch=branch
        console.log("exiting the child constructor")
    }

    work() {
        console.log("work")
    }
}

let objh = new engineer()