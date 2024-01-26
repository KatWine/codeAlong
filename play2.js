const userData = require('./data');
console.log(userData)

/**
 * Given users,return an array of each of the users' full name capitalized
 * @param {Object[]} = users array
 * @return {Object[]} = new array with all of the users' full name,capitalized
 */

function getUserFullName(userArr){
let userFullName= [];

    for(let i=0; i<userArr.length;i++){
// used the helper function to title case the string.
    let firstNameCap = capitalizeName(userArr[i].firstName);
    let lastNameCap =capitalizeName(userArr[i].lastName);
    let fullName = `${firstNameCap} ${lastNameCap}`;
    userFullName.push(fullName);
    }
    return userFullName;
    
}



//helper function, for cleaner code.

function capitalizeName(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(getUserFullName(userData));