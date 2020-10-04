let daftarP = [];
if (localStorage.getItem("daftarP")) {
  daftarP = JSON.parse(localStorage.getItem("daftarP"));
}
let daftarP1 = document.getElementsByTagName("form")[0];
daftarP1.addEventListener("submit", function (ev) {
  ev.preventDefault;
  let namaC = document.getElementById("namaC").value;
  let visiMisiP = document.getElementById("visiMisiP").value;
  if (namaC === "" || visiMisiP === "") {
    alert("Data Jangan Sampai Kosong!");
  } else {
    daftarP.push({
      namaC: `${namaC}`,
      visiMisiP: `${visiMisiP}`,
    });
    let tambahData = JSON.stringify(daftarP);
    let isiData = localStorage.setItem("daftarP", tambahData);
    daftarP1.reset();
  }
});

//Fungsi tampil data
function buattabel(data) {
  var baris = "";
  for (var i = 0; i < data.length; i++) {
    baris += `
        <tr>
          <td>${i + 1}</td>
          <td class="nik">${data[i].namaC}</td>
          <td>${data[i].visiMisiP}</td>
          <td><button id='btn_delete' onclick='hapus(${i})' class="btn_ubah">Delete</button></td>
        </tr>
        `;
  }
  document.getElementById("tabel1").innerHTML = baris;
}

let tampilData = localStorage.getItem("daftarP");
let terjemah = JSON.parse(tampilData);
buattabel(terjemah);

// // Fungsi Delete
let arr = localStorage.getItem("daftarP");
let terjemahArr = JSON.parse(arr);
function hapus(baris) {
  terjemahArr.splice(baris, 1);
  let kembali = JSON.stringify(terjemahArr);
  let terjemah = localStorage.setItem("daftarP", kembali);
  let ambilLagi = localStorage.getItem("daftarP");
  let terjemah2 = JSON.parse(ambilLagi);
  buattabel(terjemah2);
}
