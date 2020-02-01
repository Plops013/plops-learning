//Ex 1
function checaIdade(idade) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    if (idade >= 18){
      resolve("Maior que 18")
    }else {
      reject("Menor que 18");
    }
  }, 2000);
  });

  /*
  p.then((message) =>{
    console.log(message);
  }).catch((message)=>{
    console.log(message);
  });
  */
}

 checaIdade(13).then((message)=>{
  console.log(message);
}).catch((message)=>{
  console.log(message);
});

//Ex2

