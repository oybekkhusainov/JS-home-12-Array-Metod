function amble(str, arr) {
    let res = []
      for(let i = 0; i < arr.length; i++){
            res[arr[i]] = str[i]
      }
       return res.join("")
  }
  let result = amble('abcd', [1,4,8,2])

  console.log(result)