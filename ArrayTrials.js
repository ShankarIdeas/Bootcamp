//Arrays explored
//odd numbers in the array with iife
console.log("odd numbers in the array with iife");
(()=>{let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let sorted =[];
numbers.forEach(x => {if (x%2 !=0) sorted.push(x)});
console.log(sorted);
}
)();
//annonymous function odd numbers in the array
console.log("annonymous function odd numbers in the array");
let oddNumbers = ()=> {let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let sorted =[];
numbers.forEach(x => {if (x%2 !=0) sorted.push(x)});
console.log(sorted);
};
oddNumbers();
//Title Case in array with iife
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

(function(){
    let strings = ['life is a state of excitement', 'IT IS BEAUTIFUL', 'nEVER iS iT iDENTICAL tO aNYONE eLSES!'];
    strings.forEach(function(string,index) {this[index]=(string.toProperCase())}, strings);
     console.log(strings);
})();
//Title Case in array with annonymous function
var titleTheStrings = ()=>{
    let strings = ['life is a state of excitement', 'IT IS BEAUTIFUL', 'nEVER iS iT iDENTICAL tO aNYONE eLSES!'];
    strings.forEach(function(string,index) {this[index]=(string.toProperCase())}, strings);
     console.log(strings);
};
titleTheStrings();
//sum of all numbers in an array
//using iife
(()=>{
    let numerals = [1,2,3,4,5,6,7,9,10,11,12,13,14];
    let sum = 0;
    numerals.forEach(element => sum+=element);
    console.log(sum);
})();
//using annonymous function
let arraySum = ()=>{
    let numerals = [1,2,3,4,5,6,7,9,10,11,12,13,14];
    let sum = 0;
    numerals.forEach(element => sum+=element);
    console.log(sum);
}
arraySum();