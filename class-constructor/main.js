class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push("Novo todo");
    console.log(this.data);
  }
}

//faz uma ëranca com a classe List, ou seja, utiliza o uqe esta dentro do construtor
class todoList extends List {
  constructor() {
    super(); //precisa ter isso para instanciar o list
    this.usuario = "wagner";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var minhaLista = new todoList();
minhaLista.mostraUsuario();
