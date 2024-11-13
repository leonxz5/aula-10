let pessoa = {
  nome: "Daniel",
  sobreNome: "Fachinello",
  empresa: "CESF",
  cargo: " Estudante",
};

console.log(pessoa);

console.log(pessoa.nome);

//Descontruir  o objeto
const { nome, cargo, empresa } = pessoa;

console.log(nome);
console.log(empresa);

//ARRAY
let nomes = ["Aparicio", "Bernadete", "Cremilda"];
console.log(nomes);

//Desconstruir
let { 0: primeiroNome, 1: segundoNome, 2: terceiroNome } = nomes;
console.log(primeiroNome);

//Outro jeito de desconstruir array
let [primNome, segNome, tercNome] = nomes;
console.log(segNome);

