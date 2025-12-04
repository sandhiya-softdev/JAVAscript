// let listItems=document.getElementsByTagName("li");
//     for(let i=0;i<listItems.length;i++);
//     listItems[i].textContent= "Item" +(i+0); 


//      let things=document.getElementsByTagName("p");
//      console.log(things);

//      things[0].style.color="pink";
//      things[1].style.color="green";
//      things[2].style.color="orange";


// change every li items color
// even index-green
// odd index-blue

var on=document.getElementsByTagName("li");
console.log(on);
for(var i=0;i<on.length;i++);{
if(i%2==0){
    on[i].style.color="green";
}else{
    on[i].style.color="blue"
}
}
