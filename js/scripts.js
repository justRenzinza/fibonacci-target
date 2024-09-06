function sequenciaFibonacci(num) {
    let a = 0; // a e b sao os primeiros numeros da sequencia de fibonacci
    let b = 1; 


    while (a < num) {
        let temp = a;  
        a = b;         
        b = temp + b;  
    }

    
    if (a === num) {
        return `${num} pertence a sequência de fibonacci.`;
    } else {
        return `${num} nao pertence a sequência de fibonacci.`;
    }
}


let numero = parseInt(prompt("Informe um número: "));
let resultado = sequenciaFibonacci(numero);
console.log(resultado);