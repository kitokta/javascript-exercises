const findTheOldest = function(people) {
 return people.reduce((lastPerson, currentPerson) => {
     const lastPersonBirthday = getAge(lastPerson.yearOfBirth, lastPerson.yearOfDeath);
     const currentPersonBirthday = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
     
     return (lastPersonBirthday > currentPersonBirthday) ? lastPerson : currentPerson;
 })

 function getAge(birthday, death){
     if(!death) {
         death = new Date().getFullYear();
     }
     return death - birthday;
 }
};

// Do not edit below this line
module.exports = findTheOldest;
