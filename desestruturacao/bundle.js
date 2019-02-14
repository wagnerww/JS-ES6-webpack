"use strict";

var usuario = {
  nome: "wagner r wagner",
  idade: 27,
  endereco: {
    rua: "cerejeiras",
    numero: 455,
    cidade: "tres de maio",
    uf: "rs"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

var dados = function dados(_ref2) {
  var _ref2$endereco = _ref2.endereco,
      cidade = _ref2$endereco.cidade,
      uf = _ref2$endereco.uf;
  return console.log("".concat(cidade, "-").concat(uf));
};

dados(usuario);
