const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function caixaAlta(elemento) {
    const propriedadeAlta = {...objeto, nome: objeto.nome.toUpperCase(), profissao: objeto.profissao.toUpperCase(), username: objeto.username.toUpperCase(), senha: objeto.senha.toUpperCase()}
    return propriedadeAlta
}

// 2. A segunda deve retornar os valores do objeto como texto corrido.

// function funcaoB (obj){
//     const copiaObjeto = {...obj}
//     console.log(copiaObjeto)
// }
// funcaoB(objeto)

function textoCorrido(elemento) {
    const propriedadeAlta = {...objeto, textoCorrido: objeto.nome+ objeto.profissao+ objeto.username + objeto.senha }
    return propriedadeAlta.textoCorrido
}


// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
// A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

function funcao3(elemento,callback) {
    const resultado = callback(elemento)
    console.log(resultado);
    return resultado  
  }
  funcao3(objeto,caixaAlta);
  funcao3(objeto,textoCorrido);
  

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2
