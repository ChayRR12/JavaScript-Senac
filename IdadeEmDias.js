let idadeEmDias = parseInt(prompt("Digite a idade em dias:"));

let anos = Math.floor(idadeEmDias / 365); 
idadeEmDias %= 365; 
let meses = Math.floor(idadeEmDias / 30); 
let dias = idadeEmDias % 30; 

console.log(`${anos} ano(s)`); 
console.log(`${meses} mes(es)`); 
console.log(`${dias} dia(s)`); 
