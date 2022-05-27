function missingNo(nums) {
  let temp = []
  
  for (i = 0; i<nums.length+1; i++) {
    if (nums.indexOf(i) == -1) {
      temp.push(i)
      return temp[0]
    }
  }
}

//Loop through 1-100
//If nums[i] matches does not match, add i to new array
// indexOf -1 no matches
