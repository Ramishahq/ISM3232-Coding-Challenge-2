// Task 1: Calculate Tip    
let bill = 150;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

// Task 2: output details
let totalAmount = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalAmount}`);
// output The bill was $150, the tip was $22.5, and the total value is $172.5

// Task 3: Create a Function 
function calculateTip(bill) {
  return  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
// Testing function for $100 bill
let testBill = 100; 
let testTip = calculateTip(testBill);
console.log(`The Test bill amount is $${testBill}, the test tip amount is $${testTip};`) 
// output- The bill was $150, the tip was $22.5, and the total value is $172.5
// The Test bill amount is $100, the test tip amount is $15;
