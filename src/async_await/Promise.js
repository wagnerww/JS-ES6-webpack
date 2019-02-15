export default function minhaPromise(texto = "ok", time = 1000) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(texto);
    }, time);
  });
}

export async function meuAsync() {
  const res = await minhaPromise("async", 2000);
  console.log(res);
}

export async function seqAsync() {
  console.log(await minhaPromise("async 1", 2500));
  console.log(await minhaPromise("async 2", 3000));
  console.log(await minhaPromise("async 3", 3500));
}
