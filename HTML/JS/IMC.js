function calculoIMC(){
   nome = document.getElementById("txtNome").value;
   peso = document.getElementById("txtPeso").value;
   altura = document.getElementById("txtAltura").value;
   sexo = document.getElementById("txtSexo")


   console.log("IMC de " + nome + ": " + (peso / altura * altura));

}