// Calculate Tip    
let bill = 150;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

// output details
let totalAmount = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalAmount}`);
// output The bill was $150, the tip was $22.5, and the total value is $172.5