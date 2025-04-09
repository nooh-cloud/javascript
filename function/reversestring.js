function reverse(a=""){
    let reversed = ""
    for(let i of a){
        reversed = i + reversed
    }
    return reversed
}

console.log(reverse(a="hello"));
