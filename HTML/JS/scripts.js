function mensagem() {
    var nome = "Exemplo";
    var peso = 64;
    var altura = 1.80;

    console.log(nome + " " + peso + " " + altura);

    var imc = peso / altura * altura;

    console.log(imc);

    var obj = new Object();
    obj.nome = "Jo";
    obj.idade = 90;
    obj.altura = 1.65;
    obj.ehPessoa = true;
    console.log(obj);

    var obj2 = {
        nome: "Jo",
        peso: 68,
        altura: 1.65,
        ehPessoa: true
    }

    console.log("IMC de " + obj2.nome + ": " + (obj2.peso / obj2.altura * obj2.altura));

    var frutas = ["Maça", "Laranja", "Banana"];
    console.log(frutas[1]);
    frutas.push("Goiaba");
    console.log(frutas);
}

function função2() {
    var teste1;
    console.log(teste1) //undefined - valor não atribuído
    var teste2 = null;
    console.log(teste2); //null - valor nulo
    var n = 20;
    var str = "Texto";
    console.log(n * str); //NaN - erro de conversão
    console.log(2e3);//OK exibe 2000
    console.log(2e4);//OK exibe 20000
    console.log(2e308);//estoura o limite do javascript - Infinity

}

function tiposDados() {
    console.log("37" - 7);
    console.log("37" + 7);
    console.log(parseFloat("1.1") + parseFloat("1.1"));
    console.log((+1.1) + (+1.1));
}

function arrays() {
    var coffees = ["French Roast", "Colombian", "Kona"];
    var fish = ["Lion", , "Angel"];
}

function idade() {
    const idade = 46;
    if (idade < 12) {
        alert('Criança');
    } else if (idade >= 12 && idade < 18) {
        alert('Adolescente');
    } else {
        alert('Adulto');
    }
}

function valor() {
    const expr = 'Papayas';
    switch (expr) {
        case 'Oranges':
            alert('Oranges are $0.59 a pound.');
            break;
        case 'Mangoes':
        case 'Papayas':
            alert('Mangoes and papayas are $2.79 a pound.');
            break;
        default:
            alert(`Sorry, we are out of ${expr}.`);
    }
}

function executaFor() {
    const total = 10;
    let soma = 0;
    let msg = "Soma dos números \n";
    for (let i = 0; i < total; i++) {
        soma += i;
        msg += i + " + ";
    }
    msg = msg.substring(0, msg.length - 2) + " = ";
    console.log(msg + soma);
}

function converte() {
    let numeroComoString = "123";
    let numero = parseInt(numeroComoString);
    console.log(numeroComoString + 1);
    console.log(numero + 1);

    let numero2 = Number(numeroComoString);
    console.log(numero2 + 1);
}

function converteboolean() {
    let booleanComoString = "";
    let b = Boolean(booleanComoString)
    if (b == true)
        console.log("Verdadeiro: " + b)
    else
        console.log("Falso: " + b)
}

function enviaForm(){
   nome = document.getElementById("txtNome").value;
   idade = document.getElementById("txtIdade").value;
   msg = `Nome: ${nome}, Idade: ${idade}`
   
   alert(msg);
   return false
}
