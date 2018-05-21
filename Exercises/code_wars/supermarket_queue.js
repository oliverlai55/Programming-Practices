// http://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

let minObj;
let maxObj;

function sortCashierObj(obj) {
  minObj = Object.values(obj).sort((prev, next) => prev - next)[0];
  maxObj = Object.values(obj).sort((prev, next) => next - prev)[0];
  return {
    minObj: minObj,
    maxObj: maxObj
  }
}

function queueTime(customers, n) {
  //TODO

  let cashierObj = {};
  let cashier;

  for (var i = 0; i < n; i++) {
    cashier = 'cashier' + (i + 1);
    cashierObj[cashier] = 0;
  }

  for (var i = 0; i < customers.length; i++) {
    sortCashierObj(cashierObj);
    
  }

 console.log(cashierObj);

}



queueTime([1,2,3,4],5);

// queueTime([], 1), 0);
// Test.assertEquals(queueTime([1,2,3,4], 1), 10);
// Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
// Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);