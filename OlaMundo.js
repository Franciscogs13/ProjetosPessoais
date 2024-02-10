
//Exercício 1
let ola='Olá mundo!'
//console.log(ola)

//Exercício 2

function soma(a,b){
    const soma=a+b
    return soma
}
//console.log(soma(13,7))

//Exercício 3

const Num=3
function ParImpar(){
    if(Num%2==0){
        return `O número ${Num} é par!`
    }else{
        return`O número ${Num} é ímpar `
    }    
}
//console.log(ParImpar())

//Exercíccio 4

const arr=[5,9,3,7,6,13]
function MaiordeTodos(arr){
   let maior=arr[0]
   for(i of arr){
   if(arr[i]>maior){
    maior=arr[i]
   }
   }
   return maior
}
//console.log(MaiordeTodos(arr))

//Exercício 5
function multiplos(){
    let num=[]
    
        for (let i =0;i<100;i++){
            num.push(i)
        }
    
        for(n of num){
            if(num[n]%3==0&&num[n]%5!=0){
            console.log(`Fizz ${num[n]}`)
            console.log("------")
        }else if(num[n]%5==0&&num[n]%3!=0){
            console.log(`Buzz ${num[n]}`)
            console.log("------")
        }else if(num[n]%3==0 && num[n]%5==0){
            console.log(`FizzBuzz ${num[n]}`)
            console.log("------")
            }
    
        }
}
multiplos()

//Exercício 6

function text(txt){
    let str=txt
    return str
}
console.log(text('Olá, eu sou o Lucas!').split('').reverse().join(''))

//Exercício 7

const frase="Estou aprendendo a Programar!"
const vogais=[]
const contarVogais=()=>{
    for(i=0;i<frase.length;i++){
        if(frase.charAt(i)==="a"|| frase.charAt(i)==="A" || frase.charAt(i)==="e" || frase.charAt(i)==="E" || frase.charAt(i)==="i" || frase.charAt(i)==="I" || frase.charAt(i)==="o" || frase.charAt(i)==="O" || frase.charAt(i)==="u" || frase.charAt(i)==="U"){
            vogais.push(frase.charAt(i))
        }
    }
}
contarVogais()
console.log(`A quantidade de vogais na frase é ${vogais.length}`)

//Exercício 8

const numerosPrimos=(v)=>{
    if(v%2==0){
        return false
    }else{
        return true
    }
    
}

console.log(`${numerosPrimos(14)?"é":"não é"} um número primo!`)

//Exercício 9

const palavra="Programação"
if(palavra===palavra.split('').reverse().join('')){
    //console.log(`Esta palavra é um  palíndromo!`)
}else{
    //console.log(`Esta palavra não é um  palíndromo!`)
}


//Exercício 10

const mediaNumeros=()=>{
    const nums=[5,9,3,7]
    let soma=0
    for(i=0;i<nums.length;i++) {
        soma+=nums[i]
    }
    const media=soma/nums.length
    return media
}
const m= mediaNumeros()
//console.log(`A média dos valores é ${m}`)

//Exercício 11

const Fatorial=(n)=>{
    let resultado=n
    while(n>1){
        n--
        resultado*=n
    }
    return resultado
}
console.log(Fatorial(5))

//Exercício 12 sequência Fibonacci

const Fibonacci=(v)=>{
    let n1=0
    let n2=1
    let f = 1
    for(i=2;i<=v;i++){
        f=n1+n2
        n1=n2
        n2=f
    }
    return f
}
console.log(Fibonacci(8))

//Execício 13

const arr1=[5,3,9,1,6,13,7]

console.log(arr1.sort((a,b)=>a-b))//Ordem Crescente
console.log(arr1.sort((a,b)=>b-a))// A função de comparação (a, b) => b - a faz com que a ordenação seja realizada com base na diferença entre os elementos de forma inversa, garantindo a ordem decrescente.


