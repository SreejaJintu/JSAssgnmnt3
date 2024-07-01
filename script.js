//1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay.
// Test your function by calling it and using .then() to log the resolved value to the console.  
function fetchData(){
    const promise1=new Promise((resolve, reject) => {
  
        setTimeout(()=>{resolve("Data fetched successfully")},2000)
    })
    promise1.then((result)=>{console.log(result);})
    

}

// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data".
 //Modify your test to handle this rejection using .catch().  
//  var x = document.createElement("BUTTON");
//   x.innerText='error button';
//   document.body.appendChild(x);
//   x.addEventListener('click', () => {
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
    
  //})


  function fetchData1(){
    const promise1=new Promise((resolve, reject) => {
  
        setTimeout(()=>{reject("Data fetched successfully")},2000)
    })
    promise1.catch((result)=>{console.log(result);})
    

}

  //3. Convert the fetchData function from Question  1 to use async and await instead of .then().
  // Ensure to handle errors using try and catch

function fetchData2(res){
    return new Promise((resolve, reject) => {
  
        setTimeout(()=>{resolve("Data fetched successfully")},2000)
    })
    //promise1.then((result)=>{console.log(result);})
    async function abc(){
        const result=await fetchData2(res)

    }
}
