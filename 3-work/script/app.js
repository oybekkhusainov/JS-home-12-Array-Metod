function toNumberArray(stringarray){
      return stringarray.map(Number);
  }
  let result = toNumberArray(["1", "2", "3", "4", "5", "6", "7"]);
  console.log(result)