function missingWord(nums, str) {

    str = str.replace(/a-z /g, "");
    nums = nums.sort((a, b) => a - b);
    let result = ""
    for (let i = 0; i < nums.length; i++) {
      console.log(nums, nums[i]);
      result += str[nums[i]]
      if (nums[i] > str.length){
        return "No mission today";
      }
    }
    return result.toLowerCase()
  }
  
  let result = missingWord([7,9,3], "I love you");
  
  console.log(result)