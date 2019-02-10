function validateAccount(accountNumber) {
  accountNumber = String(accountNumber);
  const checkAccountArray = makeChangedNumberArray(accountNumber);
  return checkIfArrayDivibleByTen(checkAccountArray);
}


function checkIfArrayDivibleByTen (updatedArray) {
  let sum = 0;
  for(let i =0; i < updatedArray.length; i++) {
    sum += updatedArray[i];
  }
  return (sum%10 === 0);
}

function makeChangedNumberArray(accountString) {
  let doubleAccount = [];
  for (let i=0; i < accountString.length; i++) {
    let num = accountString[i];
    if (i%2) {
      num *= 2;
      num = String(num);
      if(num.length === 1) {
        num = '0'+num;
      }
      num = Number(num[0]) + Number(num[1]);
    }
    doubleAccount.push(Number(num));
  }
  //for (let i=0; i<accountNumber.length; i++) {
  return doubleAccount;
}


console.log(validateAccount(49927398716));
module.exports = validateAccount;