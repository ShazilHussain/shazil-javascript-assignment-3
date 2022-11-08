// chapter: 1 ARRAYS.
var this_array = ["syed" , "shazil" , "hussain" , "zaidi"];
console.log(this_array)
// chapter: 1 complete.

// chapter: 2 ARRAYS: ADDING AND REMOVING ELEMENT
var cities = ["karachi" , "islamiat" , "lahore" , "pishawar"];
cities.push("KPK")
console.log(cities)
var cities1 = ["karachi" , "islamiat" , "lahore" , "pishawar"];
cities1.pop()
console.log(cities1)
// chapter: 2 complete.

// chapter: 3 ARRAYS: REMOVING, INSERTING, AND EXTRACTING ELEMENT.
var cuntry = ["india" , "pakistan" , "newzealand" , "england"];
cuntry.shift()
console.log(cuntry)
var cuntry1 = ["india" , "pakistan" , "newzealand" , "england"];
cuntry1.unshift("australia")
console.log(cuntry1)
var cuntry2 = ["india" , "pakistan" , "newzealand" , "england"];
cuntry2.splice(3, 0 , "australia");
console.log(cuntry2)
var sami_final = cuntry2.slice(1, 3);
console.log(sami_final)
// chapter: 3 complete.

// chapter: 4 FOR LOOPS.
for(var i = 0 ; i <= 10 ; i++){
console.log(i)
}
// chapter: 4 complete.