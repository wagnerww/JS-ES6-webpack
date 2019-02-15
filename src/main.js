import { soma, sub, div as dividir } from "./funcoes";
import mult from "./multiplica";
import concat, { invert } from "./textos";
import * as funcoes from "./funcoes2";
import promise, { meuAsync, seqAsync } from "./async_await/Promise";
import api from "./axios/axios";

console.log(soma(4, 5));
console.log(sub(9, 6));
console.log(mult(4, 5));
console.log(dividir(5, 2));
console.log(concat("texto 1", "texto 2"));
console.log(invert("texto 1", "texto 2"));
console.log(funcoes);

promise().then(res => console.log(res));
meuAsync();
seqAsync();
api.getUser("wagnerww");
