const respostaTexto = document.querySelector(".res");

export class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    
    saudacao(){
        console.log()
    }

    exibirMensagem(){
        const abaMensgem = document.createElement("div")
        abaMensgem.classList.add("resDetalis")
        const mensagem = document.createElement("p")
        mensagem.innerHTML = `Meu nome ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao}.`
        respostaTexto.appendChild(abaMensgem)
        abaMensgem.appendChild(mensagem)
    }
}