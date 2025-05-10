function f1() {
  fetch("https://dummyjson.com/products/1")
    .then((res) =>
        {
            return res.json() 
        }
    ).then((data)=>{
        console.log(data);
})
}