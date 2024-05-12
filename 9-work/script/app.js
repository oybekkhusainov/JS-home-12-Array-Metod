function getData() {
    // your code here
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => console.log(data));


}
getData()