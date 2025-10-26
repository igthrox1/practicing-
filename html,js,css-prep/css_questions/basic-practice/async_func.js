//usage of async await data bro 
function api() {
    setTimeout(() => { //time out is ment for waiting for sertain time to get exe3cuted
       console.log("succes after 5 seconds") 
    }, 5000);
}

async function get_succes() {  
    console.log("wait for 5 ssecond")
    await api() //await is used for executing current function amd freezess rest  all works afer execution we can 
}