// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
   if (begin > end) return 0;

   let currentTotal = begin;
   let addNumber = begin + step;

   for (currentTotal = begin; addNumber <= end; addNumber+=step) {
      currentTotal += addNumber;
   }

   return currentTotal;
 };


 const sequenceSum = (begin, end, step) => {
   // May the Force be with you
   if (begin > end) return 0;
   return begin + sequenceSum(begin + step, end, step);
 };
sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
