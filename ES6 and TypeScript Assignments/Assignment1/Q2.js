
//Checking Variable Scope  

function myHalfName(name){
    if(name=="Kanuka"|| name=="Kanu") {
    let message = "Hii, Kanu!!!";
    console.log(message); // Output: Hii, Priya!!!
     }
 console.log(message); // Output: Uncaught ReferenceError: message is not defined
 }

 myHalfName("Kanu");
