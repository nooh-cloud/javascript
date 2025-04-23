let products = [
    {
        pid: 100,pName: 'apple',band: '5g',price : 120000,display : 'led'    
    },
    {
        pid: 101,pName: 'samsung',band: '5g',price: 45000, display : 'led'
    },
    {
        pid: 102,pName: 'blackberry',band: '4g', price: 50000, display: 'led'
    },
    {
        pid: 103, pName: 'Nokia', band: '3g', price: 1200, display: 'lcd'
    },
    {
        pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'
    }
]

products.forEach((item)=>{
    console.log(item.pName);
})

var founds=products.filter((item)=>{
    return(item.display=="lcd")
})
console.log(founds);

var foundss=products.filter((item)=>{
    return(item.band=="5g")
})
console.log(foundss);

var below = products.filter((item) => {
    return item.price < 50000;
});
console.log(below);

var highestPriceProduct = products.reduce((max, item) => {
    return item.price > max.price ? item : max;
});
console.log(highestPriceProduct);



var lowestPriceProduct = products.reduce((min, item) => {
    return item.price < min.price ? item : min;
});
console.log(lowestPriceProduct);