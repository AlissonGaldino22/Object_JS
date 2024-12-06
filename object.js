    let fruta = "maca" // criação de variavel

    let frutas = ['maca', 'banana', 'uva'] // criação de array

    let pessoa2 = {    //criação de objeto
        nome: 'João',
        idade: 30,
        profissão: 'Desenvolvedor'
    }


//////////////////////////////////////////////////////////////////////////////////
    const pessoa = {
        nome: "João",
        idade: 30,
        endereco: {
          rua: "Rua das Flores",
          numero: 123,
          cidade: "São Paulo",
          estado: "SP"
        }
      };
      
      // Acessando propriedades do objeto 'endereco'
      console.log(pessoa.nome);          // João
      console.log(pessoa.endereco.rua);  // Rua das Flores
      console.log(pessoa.endereco.cidade); // São Paulo


////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const pessoas = [
        {
          nome: "Ana",
          idade: 28,
          profissao: "Engenheira"
        },
        {
          nome: "Carlos",
          idade: 35,
          profissao: "Professor"
        },
        {
          nome: "Maria",
          idade: 22,
          profissao: "Designer"
        }
      ];
      
      // Acessando os objetos no array
      console.log(pessoas[0].nome); // Ana
      console.log(pessoas[1].idade); // 35
      console.log(pessoas[2].profissao); // Designer

///////////////////////////////////////////////////////////////////
   
      // array de arrays
      // exemplo cada filial tem 3 vendas: frutas, bolsas, canetas

      vendasLojas = [
        [2000, 3000, 4000],
        [400, 500, 1000]
      ]

      console.log ("As vendas de bolsas da primeira loja foram: " + vendasLojas[0][1])
      console.log ("As vendas de canetas da segunda loja foram: " + vendasLojas[1][2])


      ///////////////////////////////////////////////////////////////////////


      const empresa = {
        funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
        funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
        funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
      };
      
      // Acessando os objetos dentro do objeto 'empresa'
      console.log(empresa.funcionario1.nome); // Ana
      console.log(empresa.funcionario2.cargo); // Professor
      //console.log(empresa.funcionario3.idade); // 22

      empresa.funcionario3.idade = 23
      console.log(empresa.funcionario3.idade)   
      
      ////////////////////////////////

      const pessoa3 = {
        nome: "Ana",
        idade: 25
      }

      // Adicionando o objeto 'endereco' depois
pessoa.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };
  
  console.log(pessoa.endereco.cidade); // Rio de Janeiro


/////////////////////////////////////////



const pessoas4 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
  ];
  pessoas4.push({
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
  });
  
  console.log(pessoas4[2].nome + "---\n\n"); // Pedro

////////////////////////////////


const empresa2 = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Removendo o objeto 'endereco'
  delete empresa2.endereco;
  
  console.log(empresa2);
  /*
  Saída:
  {
    nome: "Tech Solutions",
    fundacao: 2010
  }
  */


  //////////////////////////////////////////////////////





  const pessoa5 = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa5, novoEndereco);
  
  console.log(pessoa5);
  /*
  Saída:
  {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  }
  */

  ///////////////////////////////////////////


  const person = {
    name: 'John',
    age: 30,
    city: 'New York'
    
};
const chaves = Object.keys(person);
const valores = Object.values(person)
console.log(chaves[1]); // ['name', 'age', 'city']
console.log("\n\n")
chaves.forEach(chave => {console.log(chave)})
console.log("---------------------")
valores.forEach(valor => {console.log(valor)})


////////////////////////////////////


let pessoa6 = {
    nome: "João",
    idade: 30,
    saudacao: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  console.log("nome" in pessoa); // true
  console.log("sobrenome" in pessoa6); // false


  array = [1, 2, 3, 4]
  console.log("\n--------------\n", 5 in array)

  console.log(pessoa6.hasOwnProperty("idade")); // true

  /////////////////////////////////////

  let pessoa7 = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  for (let chave in pessoa7) {
    console.log(chave + ": " + pessoa7[chave]);
  }



  // DESAFIO

  const pessoas5 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
    {
      nome: "Maria",
      idade: 22,
      profissao: "Designer"
    }
  ];
  
  for(let i in pessoas){
    for(let e in pessoas[i]){
        console.log(e + ":" +pessoas[i][e])
    }
  }


  
  

