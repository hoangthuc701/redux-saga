//console.log('Hello redux saga');
function* Hello(){
    yield 2019;
    yield 2020;
}
let x= Hello()
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());