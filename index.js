function twoNumberSum(array, targetSum) {
  const sortedArray = [...array].sort((a, b) => a - b);

  let left = 0;
  let right = sortedArray.length - 1;


  while (left < right) {
      
  let currentSum = sortedArray[left] + sortedArray[right];
    
    if(currentSum === targetSum) {
      return [sortedArray[left], sortedArray[right]]
    } 
    else if(currentSum < targetSum) {
      left++;
    } else if(currentSum > targetSum) {
      right--;
    } 
    
    
  }
    return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
