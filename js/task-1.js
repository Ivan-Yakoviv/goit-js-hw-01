function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log (makeTransaction(5, 3000));
console.log (makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));


// console.log (makeTransaction(100, 500));

function sum(max) {
  let total = 0;

  for(let i = 1; i <= max; i++) {
    if((i % 2)) {
        continue; 
    } total += i;
  }
  return total;
}

console.log(sum(10));

const start = 6;
const end = 17;
let number;
for(let i = start; i <= end; i++) {
    if((i % 5)) {
        continue; 
    } number = i;
  break;
}
  
console.log(number);

function findNumber(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number ${target}, interrupt the cycle`);
			return i;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log(findNumber(10, 6));

function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);

function findNumber(start, end, divisor) {
  let number;
  for(let i = start; i <= end; i++) {
    if((i % divisor)) {
        continue; 
    } number = i;
  return number;
  }
}
console.log(findNumber(3, 21, 8))

// let arr = ["t", "e", "s", "t"];
// arr[arr.length-1] = "q"

// console.log(arr.slice(1, 3)); // e,s (копіює з 1 до 3)

// console.log(arr.slice(-2)); // s,t (копіює з -2 до кінця)

function getLastElementMeta(array) {
  const lastElementIndex = array.length-1;
  // array[array.length-2] = lastElementIindex;
    // array.slice(length-2);
  // return array.slice(-2);
  // if (array.length >= 2) {
  //   array[array.length-2] = lastElementIindex;
  //   return array.slice(-2);
  // } 
  // else {array[array.length-2] = lastElementIindex;
  const lastElement = array[lastElementIndex];
  array = [lastElementIndex, lastElement];
  return array;
  }


array = ["a"];
// array = ["d", "c"];
console.log(getLastElementMeta(array)); // [3,d] (копіює з -2 до кінця)