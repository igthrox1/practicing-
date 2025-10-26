//fetching api using api enpoints 
const url = " https://api.coindesk.com/v1/bpi/currentprice.json"

const get_facts = async() => {
    console.log("fetching daata........")
    let response = await fetch(url)
    console.log("success")
    let data = response.json() //getiing data into json format
    console.log(data[0].text) //geting the actual data from the json data 
}