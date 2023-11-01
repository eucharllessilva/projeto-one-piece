/*
o que precisamos fazer? - quando clicar no botão

*/
// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecioanado
//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um dele
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

       
        desselecionarBotao();
        desselecionarPersonagens();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        
    });
});

function desselecionarPersonagens() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
//botoes.addEventListener("click", () => {
//    console.log("clicou no botao");
//})