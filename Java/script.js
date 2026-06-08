
document.addEventListener("DOMContentLoaded", function () {

const botao = document.querySelector(".btn-gold");

botao.addEventListener("click", function (e) {
e.preventDefault();

// pegando valores
const nome = document.getElementById("nome").value;
const telefone = document.getElementById("telefone").value;
const servico = document.getElementById("servico").value;
const data = document.getElementById("data").value;
const hora = document.getElementById("hora").value;

// validação básica
if(!nome || !telefone || !servico || !data || !hora){
alert("Preencha todos os campos para agendar ✨");
return;
}

// mensagem formatada
const mensagem =
`Olá! Quero agendar um horário 💇‍♀️

👤 Nome: ${nome}
📞 Telefone: ${telefone}
💈 Serviço: ${servico}
📅 Data: ${data}
⏰ Hora: ${hora}`;

// abrir WhatsApp
const url = "https://wa.me/5549998095175?text=" + encodeURIComponent(mensagem);

window.open(url, "_blank");

});

});
