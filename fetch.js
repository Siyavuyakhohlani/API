// fetch("https://siyavuyakhohlani.github.io/API/")
// .then((data)=> data.json())
// .then((x)=>console.log(x))
// .catch(err=> console.error(err))
let friends
async function fetchAPI() {
    let api = await fetch("https://siyavuyakhohlani.github.io/API/")
    let data = await api.json()
    friends =data
    friends.forEach(item=> {
        console.log(`My name is ${item.firstName} ${item.lastName} I really enjoy ${item.favHobby} and I am ${item.criminal?"a criminal":"not a criminal"}`);
    }) 
    
}
fetchAPI()