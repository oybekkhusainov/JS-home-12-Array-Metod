function twoSort(s) {
    s.sort(function(a, b){
        return a.length - b.length
    })
    return s[4].split('').join("***")
}

let result = twoSort([ "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);

document.write(result)