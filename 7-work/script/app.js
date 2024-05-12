function array(string) {

       return string.split(",").slice(1,-1).join(" ") || null
  }

  let result = array("1,4,6,7,9,4,5");
document.write(result)