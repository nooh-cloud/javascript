let data = [
    {name:"ammu",age:45},
    {name:"anu",age:30},
    {name:"anu",age:26},
]

data.forEach((item)=>{
    console.log(item.name);
})

var found=data.find((item)=>{
    return(item.name=="anu")
})
console.log(found);

var founds=data.filter((item)=>{
    return(item.name=="anu")
})
console.log(founds);


var array=data.map((item)=>{
    return(item.name)
})
console.log(array);


let number = [1,2,3,4,5];

let sum = number.reduce((num1,num2)=>{
    return num1 + num2;
}, 0);

console.log(sum);
