function max (x,y){
    if(x > y){
        return x;        
    }else{
        return y;
    }
}

// arrow function diz a mesma coisa que o de cima se X for maior que Y '?' retorna X ':' se nao retorna Y;
const max2 = (x , y) => x > y ? x : y;

console.log(max(20,6));
console.log(max2(20,60));