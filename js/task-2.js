function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

// console.log(getShippingMessage("Ukraine", 10, 0));

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   }
//   else {
//     return "File extension does not match";
//   }
// }

// // checkFileExtension("index.html", ".css");
// console.log(checkFileExtension("index.html", ".html"));

// const input = " JavaScript       is        awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput);
// // let name = "  file  ";

// function createFileName(name, ext) {
//   const trimedName = name.trim();
//   return `${trimedName}.${ext}`;
// }
// // createFileName("file", "doc");
// console.log(createFileName("file", "doc"));

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

function calculateTotal(number) {
  let i=1;
  while (i<number) {
    count += i;
  return count;}
}
console.log(calculateTotal(3));

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }