// Fungsi Isi Tabel
function buattabel(data) {
  var baris = "";
  for (var i = 1; i < data.length; i++) {
    baris += `
      <tr>
        <td>${i}</td>
        <td>${data[i].nama}</td>
        <td>${data[i].hobi}</td>
        <td><button id='btn_delete' onclick='hapus(${i})'>Delete</button></td>
      </tr>
      `;
  }
  document.getElementById("tabel1").innerHTML = baris;
}
var isi = [
  {
    nama: "Dummy",
    hobi: "dummy",
  },
];
// var isi = [
//   {
//     nama: "Dummy",
//     hobi: "dummy",
//   },
//   {
//     nama: "Rifki",
//     hobi: "Ngoding",
//   },
//   // {
//   //   nama: "Nadia",
//   //   hobi: "Menulis",
//   // },
//   // {
//   //   nama: "Sarah",
//   //   hobi: "Menggambar",
//   // },
//   // {
//   //   nama: "Manda",
//   //   hobi: "Jalan-jalan",
//   // },
//   // {
//   //   nama: "Farhan",
//   //   hobi: "Menggambar",
//   // },
// ];

// let json_isiawal = JSON.stringify(isi);
// localStorage.setItem("datatabel", json_isiawal);
let stop = localStorage.getItem("datatabel");
buattabel(JSON.parse(stop));

if (localStorage.getItem("datatabel")) {
  isi = JSON.parse(localStorage.getItem("datatabel"));
}
//Fungsi Buat & Hapus
var form_buat = document.getElementById("buat");
var tbody_k = document.getElementById("tabel1");
form_buat.addEventListener("submit", function (event) {
  event.preventDefault();
  var nama_k = document.getElementById("nama").value;
  var hobi_k = document.getElementById("hobi").value;
  let tampung = isi.push({ nama: `${nama_k}`, hobi: `${hobi_k}` });
  let json_tambah = JSON.stringify(isi);
  localStorage.setItem("datatabel", json_tambah);
  let js_isi = localStorage.getItem("datatabel");
  let js_isi2 = JSON.parse(js_isi);
  form_buat.reset();
  buattabel(js_isi2);
});

function hapus(row) {
  isi.splice(row, 1);
  let st = JSON.stringify(isi);
  let set = localStorage.setItem("datatabel", st);
  buattabel(isi);
}

// let lokaltabel = document.getElementById("tabellokal");
// let lokalinput = document.lokal.inputname;
// lokaltabel.addEventListener("submit", function (event) {
//   event.preventDefault();
//   localStorage.setItem("nama", lokalinput.value);
//   lokaltabel.reset();
//   location.reload();
// });

// function tampilkan() {
//   let tampilkan = document.getElementById("tampilkan");
//   let nilai = localStorage.getItem("nama");
//   tampilkan.innerHTML = nilai;
// }
// tampilkan();
