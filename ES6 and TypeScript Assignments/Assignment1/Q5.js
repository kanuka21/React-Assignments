
// Sub Question 1
let add = (a = 13, b = 7) => {
  console.log(`a: ${a} b: ${b} addition is: ${a+b}`);
};

add();
add(10);



/************************************************************************** */
// Sub Question 2
let userWithFriends = (userName, ...userFriends) => {
    console.log(`{userName: "${userName}", list of Friends is: "${userFriends}"}`);
}

userWithFriends('Kanuka','Athira','Shilpi','Divya','Akash');
userWithFriends('Athira','Kanuka','Shilpi','shivi');


/************************************************************************** */
// Sub Question 3
let printCapitalNames = (...names) => {
    const result= [];
    names.forEach((element) => {
        result.push(element.toUpperCase());
    });
    console.log(`Names in Upper Case: "${result }"`);
}

let namesList = ['shubh','amrit','ankur','tani'];
console.log(namesList);
printCapitalNames(...namesList);


