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
  {
    nama: "Rifki",
    hobi: "Ngoding",
  },
  {
    nama: "Nadia",
    hobi: "Menulis",
  },
  {
    nama: "Sarah",
    hobi: "Menggambar",
  },
  {
    nama: "Manda",
    hobi: "Jalan-jalan",
  },
  {
    nama: "Farhan",
    hobi: "Menggambar",
  },
];
buattabel(isi);

//Fungsi Buat & Hapus
var form_buat = document.getElementById("buat");
var tbody_k = document.getElementById("tabel1");
form_buat.addEventListener("submit", function (event) {
  event.preventDefault();
  var nama_k = document.getElementById("nama").value;
  var hobi_k = document.getElementById("hobi").value;

  isi.push({ nama: `${nama_k}`, hobi: `${hobi_k}` });
  form_buat.reset();
  buattabel(isi);
});

function hapus(row) {
  isi.splice(row, 1);
  buattabel(isi);
}
