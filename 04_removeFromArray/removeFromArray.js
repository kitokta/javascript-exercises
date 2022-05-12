const removeFromArray = function(...args) {
   let myArray = args[0];
   let newArray = [];
    myArray.forEach(item => {
    if(!args.includes(item)){
            newArray.push(item);
        }
    });
        
return newArray;
}

removeFromArray([1,2,3,4], 3)
// Do not edit below this line
module.exports = removeFromArray;
