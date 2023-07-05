function calculoIMC() {
   nome = document.getElementById("txtNome").value;
   peso = parseFloat(document.getElementById("txtPeso").value);
   altura = parseFloat(document.getElementById("txtAltura").value);
   sexo = document.querySelector("input[name='Sexo']").value;

   let imc = peso / (altura * altura);
   let classificacao;


   if (sexo == "Masc") {
      if (imc > 40) {
         classificacao = "Obeso grau 3";
      } else if (imc >= 35) {
         classificacao = "Obeso grau 2";
      } else if (imc >= 30) {
         classificacao = "Obeso grau 1";
      } else if (imc >= 25) {
         classificacao = "Levemente Obeso";
      } else if (imc >= 20) {
         classificacao = "Normal";
      } else {
         classificacao = "Magro";
      }
   } else if (sexo == "Fem") {
      if (imc > 39) {
         classificacao = "Obeso grau 3";
      } else if (imc >= 34) {
         classificacao = "Obeso grau 2";
      } else if (imc >= 29) {
         classificacao = "Obeso grau 1";
      } else if (imc >= 24) {
         classificacao = "Levemente Obeso";
      } else if (imc >= 19) {
         classificacao = "Normal";
      } else {
         classificacao = "Magro";
      }
   }

   var resultado = "Nome: " + nome + " - Sexo: " + sexo + "\nIMC: " + imc.toFixed(2) + " \nAvaliação: " + classificacao;

   document.getElementById("resultadoIMC").value = resultado;
}

