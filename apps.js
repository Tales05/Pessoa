import { Pessoa } from "./pessoa.js";
const nome = document.querySelector(".nome");
const idade = document.querySelector(".idade");
const profissao = document.querySelector(".profissao");
const botaoAdicionar = document.querySelector("#adicionarPessoa");

botaoAdicionar.addEventListener('click', () => adicionarNome());

function adicionarNome(){
    let pessoa = new Pessoa(nome.value, Number(idade.value), profissao.value);
    pessoa.saudacao()
    pessoa.exibirMensagem()
}




window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        adicionarNome();
    }
})