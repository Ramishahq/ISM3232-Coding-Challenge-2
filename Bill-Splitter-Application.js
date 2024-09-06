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
// The Test bill amount is $100, the test tip amount is $15.

// Task 4: Utilize Arrays

// created Arrays of data set 1 and 2 
const dataSet1Bills = [275, 40, 430];
const dataSet2Bills = [125, 555, 44];

// creating Arrays of tips for data set 1 and 2 using map()
const dataSet1Tips= dataSet1Bills.map(bill => calculateTip(bill));
const dataSet2Tips= dataSet2Bills.map(bill => calculateTip(bill));

// creating arrays for total bills = bills + tips fot data set 1 and 2 
const dataSet1Totals= dataSet1Bills.map((bill,index) => bill + dataSet1Tips [index]);
const dataSet2Totals= dataSet2Bills.map((bill,index) => bill + dataSet2Tips[index]);

// testing results for Data set 1 
console.log("Data Set 1- Bills:",dataSet1Bills);
console.log( "Data Set 1- Tips:",dataSet1Tips);
console.log("Data Set 1- Totals(bill + tip):",dataSet1Totals);

// output for Data set 1 
Data Set 1- Bills: (3) [275, 40, 430]
Data Set 1- Tips: (3) [41.25, 8, 86]
Data Set 1- Totals(bill + tip): (3) [316.25, 48, 516]

//testing results for Data set 2 
console.log("Data Set 2- Bills:",dataSet2Bills);
console.log( "Data Set 2- Tips:",dataSet2Tips);
console.log("Data Set 2- Totals(bill + tip):",dataSet2Totals);

// output for Data set 2
Data Set 2- Bills: (3) [125, 555, 44]
Data Set 2- Tips: (3) [18.75, 111, 8.8]
Data Set 2- Totals(bill + tip): (3) [143.75, 666, 52.8]
