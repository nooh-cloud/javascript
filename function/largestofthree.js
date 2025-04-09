function largest(a,b,c){
    if(a > b && a > c){
        console.log(a);
    }  else if(b > c && b > a){
        console.log(b);
    } else {
        console.log(c);
    }
}
largest(100,6,3);
