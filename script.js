
do {
    a = +prompt('введите количество строк');
} while ( a == 0 );
if (isNaN(a)) {
    a = 5
} else {
    a = a
}
do{
    first= prompt('введите первый cимвол')
    
} while (first == 0);

do {
    second = prompt(' введите второй символ')
} while (a == 0);

result = first

console.log(first + second);
for(let i = 0; i<= a; i++){
    result = first + result
    
    console.log(result + second );
}


