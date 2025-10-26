//creating calsses thaht measn it is like making blue print 

class toyotacar {
    constructor(brand) {  // consstructor is used for defining at start like initializing some things
        console.log("the object created")
    }
    start() {
        console.log("start")
    }

    stop() {
        console.log("stop")
    }

    setbrand(brand){
        this.brand=brand
    }
}

let car = new toyotacar("rolls royce");