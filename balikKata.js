console.log(
  "BALIK KATA: SPLIT, REVERSE, DAN JOIN\n======================================================"
);
function balikKata(kata) {
  return kata.split("").reverse().join("");
}

console.log(balikKata("Niomic!"));
console.log(balikKata("Javascript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));

console.log(
  "\nBALIK KATA: FOR\n======================================================"
);
const balikKata2 = (kata) => {
  let newKata = "";

  for (let i = kata.length - 1; i >= 0; i--) {
    newKata += kata[i];
  }
  return newKata;
};

console.log(balikKata2("Niomic!"));
console.log(balikKata2("Javascript"));
console.log(balikKata2("alohahola"));
console.log(balikKata2("Jawa_Barat"));

console.log(
  "\nBALIK KATA: WHILE\n======================================================"
);

const balikKata3 = (kata) => {
  let i = kata.length - 1;
  let newKata = "";

  while (i >= 0) {
    newKata += kata[i];
    i--;
  }
  return newKata;
};

console.log(balikKata3("Niomic!"));
console.log(balikKata3("Javascript"));
console.log(balikKata3("alohahola"));
console.log(balikKata3("Jawa_Barat"));

console.log(
  "\nBALIK KATA: FOREACH\n======================================================"
);

const balikKata4 = (kata) => {
  let newKata = "";

  kata
    .split("")
    .reverse()
    .forEach((item) => {
      newKata += item;
    });
  return newKata;
};

console.log(balikKata4("Niomic!"));
console.log(balikKata4("Javascript"));
console.log(balikKata4("alohahola"));
console.log(balikKata4("Jawa_Barat"));

console.log(
  "\nBALIK KATA: REDUCERIGHT\n======================================================"
);

const balikKata5 = (kata) => {
  let newKata = "";

  kata.split("").reduceRight((_, item) => (newKata += item), null);
  return newKata;
};

console.log(balikKata5("Niomic!"));
console.log(balikKata5("Javascript"));
console.log(balikKata5("alohahola"));
console.log(balikKata5("Jawa_Barat"));
