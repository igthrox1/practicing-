//concatenate string and number
let a = "harry"
let b = 6
console.log(a+b)

// 2)
console.log(typeof(a+b)) //string

// 3)
const c = {
    name:"harry",
    section:6,
    isPrincipal:false
     }
console.log(c)
//const c = "harry" //cannot redeclare constant variable
c["friend"] = "rohan"
c["gender"] = "male"
console.log(c)

// 4)
const dict = {
    fast:"quick",
    slow:"not quick",
    make:"create",
}
console.log(dict)

console.log(dict.fast)
console.log(dict["slow"])