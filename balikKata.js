console.log(
  "BALIK KATA\n======================================================"
);
function balikKata(kata) {
  return kata.split("").reverse().join("");
}

console.log(balikKata("Niomic!"));
console.log(balikKata("Javascript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));

console.log("\natau\n======================================================");
const balikKata2 = (kata) => {
  let newKata = "";

  for (let i = kata.length - 1; i >= 0; i--) {
    newKata += kata[i];
  }
  return newKata;
};

console.log(balikKata2("Eropa"));
