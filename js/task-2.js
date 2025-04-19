function getShippingMessage(country,price,deliveryFee) {
const totalPrice = price + deliveryFee;
return `Shipping to ${country} will cost  ${totalPrice} credits.`;
}
console.log(getShippingMessage("China", 100, 50)); 
console.log(getShippingMessage("Chile", 250, 100)); 