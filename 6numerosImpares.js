let x = parseInt(prompt("Digite um número inteiro positivo:"));

if (x % 2 === 0) {
    x++; 
}

for (let i = 0; i < 6; i++) {
    console.log(x);
    x += 2; 
}
