//array
const myArray = [0,1,2,3,4]

myArray.push(5);

console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(7);
console.log(myArray);
console.log(myArray.includes(5));

console.log(myArray.indexOf(3));

const newArr = myArray.join()
console.log(newArr)

console.log(myArray.slice(1,5));
console.log(myArray.splice(1,5));