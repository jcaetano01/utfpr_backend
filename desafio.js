const usuarios = [
 { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
 { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
 { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
 { nome: "Diana", idade: 25, ativo: true, compras: [] },
 { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

console.log("1. Total Compras por user:")

const ex1 = usuarios.map(usuario => {
    const totalCompras = usuario.compras.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    console.log(`${usuario.nome}: total =${totalCompras}`);
});

console.log("\n");


console.log("2. Users Ativos:")

const ex2 = usuarios.map(usuario => {
    
    if(usuario.ativo == true){
        console.log(`${usuario.nome}`);   
    }
});

console.log("\n");

console.log("3. Maiores de 18:")

const ex3 = usuarios.map(usuario => {
    
    if(usuario.idade >= 18){
        console.log(`${usuario.nome}`);   
    }
});

console.log("\n");

console.log("4. Maior volume de compras:")

const totalPorUser = usuarios.map(usuario => {
  const compras = usuario.compras.reduce((val, atual) => val + atual, 0);
  
  return { 
    nome: usuario.nome, 
    total: compras 
  };
});

const maisCompras = totalPorUser.reduce((maior, atual) => {
  if(atual.total > maior.total){
    return atual;
  }
  else return maior
});

console.log(`Usuário com maior volume: ${maisCompras.nome}`);
console.log(`Total: ${maisCompras.total}`);

console.log("\n");

console.log("5. Desafio de Coerção de Tipos:");

console.log("5" + 2);
//coercao de concatenacao de strings, String concatenando usando "+" transforma numero em String
console.log("5" - 2);
//coercao pra numerico por o operador "-" serve somente pra operacoes, transforma String em numerico
console.log(true + 1);
//true vira 1 e soma com o numerico 1 = 2, oolean vira numerico
console.log(false == 0);
//com fase na opercao de tipo, verifica que false = 0, portanto 0 == 0 e true. Verifica a condicao entre os elementos da esquerda e da direita
console.log(false === 0);
//igualdade estrita, verifica valor e tipo, false


console.log("\n");

console.log("6. Desafio Arrow Function vs Function:")


const pessoa1 = {
 nome: "Maria",
 falar: function(){
 console.log(this.nome);
 }
};
pessoa1.falar();

/*
Nesse caso function() tem this definido de acordo com o contexto definido,
por isso ele busca a variavel localizada no objeto onde foi chamada.
*/



const pessoa2 = {
 nome: "Maria",
 falar: () => {
 console.log(this.nome);
 }
};
pessoa2.falar();

/*
No contexto das arrow functions o this nao e definido de acordo com o contexto.
Ela sempre busca na variavel global e ignora o contexto do objeto.
Gerando undefined.
*/


console.log("\n");


console.log("7. Desafio Relatorio")

const gerarRelatorio = (usuarios) => {

//1
    const totalUsuarios = usuarios.length;
//2
    const usuariosAtivos = usuarios.filter(usuarios => usuarios.ativo === true).length;
//3
    const usuariosInativos = totalUsuarios - usuariosAtivos;
//4
    const mediaIdade = usuarios.reduce((soma, usuarios) => soma + usuarios.idade, 0)/totalUsuarios;
//5
    const somaCompra = usuarios.map(usuario => {
      const compras = usuario.compras.reduce((val, atual) => val + atual, 0);
        return { 
          nome: usuario.nome, 
          total: compras 
        };
    });

    const maiorComprador = somaCompra.reduce((maior, atual) => {
      if(atual.total > maior.total){
        return atual;
      }
      else return maior
    }).nome;
        

    return{
        totalUsuarios
        ,
        usuariosAtivos
        ,
        usuariosInativos
        ,
        mediaIdade
        ,
        maiorComprador
        

    }
}

const relatorioFinal = gerarRelatorio(usuarios);
console.log(relatorioFinal);

