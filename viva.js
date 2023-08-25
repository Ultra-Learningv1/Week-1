function teste() {
  const a = 1;
  console.log(a + 1);
  const b = "3";
  console.log(a + b);
  const c = 3;
  console.log(a + c);
}

function teste2(num){
  console.log("========");
  if(num >= 30 && num % 2 == 0){
    return "maior que 30 e par";
  }
}


teste();
console.log(teste2(30));
