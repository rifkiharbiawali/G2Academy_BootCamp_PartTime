let userO = document.getElementById("userO");
let userA = document.getElementById("userA");

const tampil = () => {
  let ambilData = localStorage.getItem("dataAdmin");
  let terjemahData = JSON.parse(ambilData);
  userO.innerHTML = `Selamat Datang ${terjemahData[0].namaO}`;
  userA.innerHTML = `${terjemahData[0].namaA}`;
};
tampil();
