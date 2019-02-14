const arr = [1, 3, 4, 5, 8, 10];
//pegaa item a item e o index
const newArr = arr.map((item, index) => {
  return item + index;
});

console.log("map", newArr);

//pega  o valor atual e o valor do próximo
const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log("sum", sum);

//faz um filtro, no caso vendo se o valor é divisivel, retornando tru ou false
const filter = arr.filter(item => {
  return item % 2 === 0;
});

//retorna true caso o item do array for = 2, caso não achar nada, retorna undefined
const find = arr.find(item => {
  return item === 2;
});

console.log("find", find);

console.log("filter", filter);
