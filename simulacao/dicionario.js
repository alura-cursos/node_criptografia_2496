import { createHash } from 'crypto'

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    
    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }

        //console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const usuario = new Usuario('joao manoel', 'senha123')

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.map( senha => {
    if (usuario.autentica("joao manoel", senha)){
        console.log(`A senha do usuário é ${senha}`)
    }
})
