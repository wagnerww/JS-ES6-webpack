const usuario = {
  nome: "wagner r wagner",
  idade: 27,
  endereco: {
    rua: "cerejeiras",
    numero: 455,
    cidade: "tres de maio",
    uf: "rs"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome }) {
  console.log(nome);
}

const dados = ({ endereco: { cidade, uf } }) => console.log(`${cidade}-${uf}`);

dados(usuario);
