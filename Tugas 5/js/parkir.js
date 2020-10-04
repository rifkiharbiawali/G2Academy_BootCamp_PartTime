let dataParkir = [];
if (localStorage.getItem("dataParkir")) {
  dataParkir = JSON.parse(localStorage.getItem("dataParkir"));
}
let waktu = new Date();
let randomId = Math.round(Math.random() * 90000) + 10000;
let dataKarcis = document.getElementsByTagName("form")[0];
dataKarcis.addEventListener("submit", function (ev) {
  ev.preventDefault;
  let printKarcis = document.getElementById("printKarcis");
  let Jam = waktu.getHours();
  let Menit = waktu.getMinutes();
  let A = document.getElementById("A").value.toUpperCase();
  let B = document.getElementById("B").value;
  let C = document.getElementById("C").value.toUpperCase();
  if (A === "" || B === "" || C === "") {
    alert("Masukan Data Plat Kendaraan!");
  } else {
    dataParkir.push({
      id: `Mall_Rifki_${randomId}`,
      jenisKendaraan: ``,
      noPlat: `${A} ${B} ${C}`,
      masukJ: `${Jam}`,
      masukM: `${Menit}`,
      keluar: ``,
      lamaParkir: ``,
      tarif: ``,
    });
    let tambahData = JSON.stringify(dataParkir);
    let isiData = localStorage.setItem("dataParkir", tambahData);
    dataKarcis.reset();
  }
});
// Fungsi Bantuan
let bantuan = document.getElementById("bantuan");
bantuan.addEventListener("click", function () {
  let keterangan = document.getElementById("keteranganB");
  if (keterangan.innerHTML === "") {
    keterangan.innerHTML =
      "<center style='margin-top : 5px; color : red;'>Tekan Tombol Tiket untuk mengeluarkan tiket parkir!</center>";
  } else {
    keterangan.innerHTML = "";
  }
});

//Fungsi Print Karcis
let ambilDataK = localStorage.getItem("dataParkir");
let isiDataK = JSON.parse(ambilDataK);
let panjangData = isiDataK.length;
let dataKe = isiDataK[panjangData - 1];
document.getElementById("printKarcis").innerHTML = `
    <h1>--Karcis Parkir Mall Rifki--</h1>
    <p>No Id : ${dataKe.id}</p>
    <p>No Plat : ${dataKe.noPlat}</p>
    <p>Masuk : ${dataKe.masukJ}:${dataKe.masukM}</p>
    <p>Tarif Motor Rp. 3000/2menit, 1000 untuk menit berikutnya</p>
    <p>Tarif Mobil Rp. 5000/2menit, 3000 untuk menit berikutnya</p>
    <h2>--Terimakasih--</h2>
    `;
