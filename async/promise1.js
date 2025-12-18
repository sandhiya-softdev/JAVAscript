let promise = new Promise((resolve,reject)=>{
    let apple=true;
    if(apple){
        resolve("success");
    }else(
        reject("failed")
    )

});
 promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

   
    



