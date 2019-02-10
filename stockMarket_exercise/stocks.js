
//Brute Force strategy 1
let stocksBrute = function calculatesTheBiggestProfitWithBruteForce (data) {
  let biggestProfit = 0;
  for (let i = 0; i < data.length; i++) {
    let num1 = data[i];
    for (let j = i; j < data.length; j++) {
      let num2 = data[j];
      if ((num2-num1) > biggestProfit) {
        biggestProfit = (num2-num1);
      }
    }
  }
  return biggestProfit;
};


//Elegant Strategy 2:
let stocksElegant = function calculatesBiggestProfitElegantly (data) {
  //unknown at this time
};

console.log(stocks([45, 24, 35, 31, 40, 38, 11]));