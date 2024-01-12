let contador = 0;
const readline = require('readline-sync');

// for
// enquanto uma determinada condição for verdadeira, faça algo

// quero que o contador comece em zero, e incremente de 1 em 1 até 10
// para (variavel de controle; condição de repetição; incremento)

// na primeira iteração, ou seja, na primeira vez que a repetição for executada
// vai criare inicializar uma variavel de controle.
// em seguida, vai validar a condição de execução, sendo verdadeiro, vai executar
// o código dentro do bloco do for e incrementar a variavel de controle.
// caso a condição seja falsa, vai sair da repetição

//for (contador = 0; contador <=10; contador = contador + 1) {
    ///console.log("Passou "+contador+"vezes");
//}

//for (i = 0; i <=10; i++){
    //console.log("Passou "+i+"vezes")
//}

// while - enquanto
//while (contador <=10 ){
    //console.log("Passou "+ contador + "vezes");
    //contador++;
//}

let nome;

// expressões que podem ser validadas como verdadeiro ou falso
// mas não são verdadeiro ou falso
// truthy - 1 (ou numero maior que zero), != undefined
// falsy - undefined, 0, "", false, NaN, null

//condicão abaixo nega o valor do nome
while(!nome){
    console.log("Nome ínvalido");
    nome = readline.question("Informe um nome");
}
