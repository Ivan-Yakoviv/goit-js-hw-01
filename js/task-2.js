function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

// console.log(getShippingMessage("Ukraine", 10, 0));

function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  }
  else {
    return "File extension does not match";
  }
}

// checkFileExtension("index.html", ".css");
console.log(checkFileExtension("index.html", ".html"));