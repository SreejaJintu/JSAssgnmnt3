//1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay.
// Test your function by calling it and using .then() to log the resolved value to the console.  
function fetchData(){
    const promise1=new Promise((resolve, reject) => {
  
        setTimeout(()=>{resolve("Data fetched successfully")},2000)
    })
    promise1.then((result)=>{console.log(result);})
    

}
fetchData();

// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data".
 //Modify your test to handle this rejection using .catch().  
//  var x = document.createElement("BUTTON");
//   x.innerText='error button';
//   document.body.appendChild(x);
//   x.addEventListener('click', ()=>{
//     const promise=new Promise((resolve, reject) => {
//         let error1=true
//         if(error1)
//             {
//                 reject("Failed to fetch data")
//             }
//             else{resolve("Data fetched successfully")}
  
//         //setTimeout(()=>{resolve("Data fetched successfully")},2000)
//     })
//     promise.then((result)=>{console.log(result);})
//     promise.catch((err)=>{console.log(err);})
    
//   })

// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data".
 //Modify your test to handle this rejection using .catch().  
  function fetchData1(){
    const promise2=new Promise((resolve, reject) => {
  
        setTimeout(()=>{reject("Failed to fetch data")},2000)
    })
    promise2.catch((result)=>{console.log(result);})
    

}
fetchData1();

  //3. Convert the fetchData function from Question  1 to use async and await instead of .then().
  // Ensure to handle errors using try and catch

 
function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Data fetched successfully again")},3000)
    })}
       async function abc(){
        const result=await fetchData2()
        console.log(result)
        console.log('waited 3 seconds')
    }
    abc();
   
//4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ".
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page.
// Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails.
// (deploy the webpage on github)
function getCountryData() {
    document.getElementById("container").setAttribute("style", "border:thick solid #0000FF;");

fetch("https://restcountries.com/v3.1/all")
.then((result)=>{
    return result.json();
})
.then((result)=>{
    console.log({result})
    console.log(typeof result);

    for (let index = 0; index < result.length; index++) {
        var x = document.createElement("h2");
        var y =document.createElement("img")
        y.src=  result[index].flags.png;
        x.innerText=(index+1)+'.  ' +result[index].name.common;
        var z=document.createElement("h3")
        z.innerText='Capital : '+result[index].capital
        const languages = document.createElement('h4');

        if (result[index].languages) {
            const languageList = Object.values(result[index].languages).join(', ');
            languages.innerText = 'Languages: ' + languageList;
        } else {
            languages.innerText = 'Languages: Not available';
        }
       

        document.querySelector("#container").style.backgroundColor = "grey";
        
        document.getElementById("container").appendChild(x)
        document.getElementById("container").appendChild(y)
        document.getElementById("container").appendChild(z)
        document.getElementById('container').appendChild(languages);   
    }
})
}