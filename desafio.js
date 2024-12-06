let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
};

console.log(livro.titulo)
console.log(livro.autor)






//////////////////////////////////////



let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020
};


carro.ano = 2022;
carro.cor = "Prata"

console.log(carro)



///////////////////////////////////////////


let pessoa = {
    nome: "Carlos",
    idade: 28,
    cumprimento() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
};

console.log(pessoa.cumprimento()) 
