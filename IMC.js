let altura = 1.53;
let peso = 56;
let imc = (peso)/(altura * altura);

console.log(imc)

if (imc <= 18.5){
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Peso normal')
} else if (imc >= 25 && imc <= 29.9){
    console.log('Excesso de peso')
} else if(imc >=30 && imc <= 34.9){
    console.log('Obesidade classe I')
} else if (imc >=35 && imc <=39.9){
    console.log('Obesidade classe II')
}else{
    console.log('Obesidade classe III')
}
