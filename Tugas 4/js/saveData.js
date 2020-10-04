// Fungsi kondisi perulangan
var isi = [
  // {
  //   nik: `dummy`,
  //   nama: `dummy`,
  //   ttl: `dummy`,
  //   jk: `dummy`,
  //   alamat: `dummy`,
  //   agama: `dummy`,
  //   nikah: `dummy`,
  //   kerja: `dummy`,
  //   negara: `dummy`,
  // },
];
if (localStorage.getItem("datatabel")) {
  isi = JSON.parse(localStorage.getItem("datatabel"));
}

let selekTabel = localStorage.getItem("datatabel");
let tabelSelek = JSON.parse(selekTabel);

// Fungsi save
var form_buat = document.getElementById("buat");
var tbody_k = document.getElementById("tabel1");
form_buat.addEventListener("submit", function (event) {
  event.preventDefault();
  var nik = document.getElementById("nik").value;
  var nama = document.getElementById("nama").value;
  var ttl = document.getElementById("ttl").value;
  var jk = document.getElementById("jk_e").value;
  var alamat_e = document.getElementById("alamat_e").value;
  var agama_e = document.getElementById("agama_e").value;
  var nikah_e = document.getElementById("nikah_e").value;
  var pekerjaan = document.getElementById("pekerjaan").value;
  var kewarganegaraan = document.getElementById("kewarganegaraan").value;
  // for (let i = 0; i < tabelSelek.length; i++) {
  //   var lokalaray = tabelSelek[i].nik;
  // }

  if (
    nik === "" ||
    nik === "" ||
    nama === "" ||
    ttl === "" ||
    jk === "" ||
    alamat_e === "" ||
    agama_e === "" ||
    nikah_e === "" ||
    pekerjaan === "" ||
    kewarganegaraan === ""
  ) {
    alert("Isikan Semua Data Diri Anda / NIK tidak boleh sama!!");
  } else {
    isi.push({
      nik: `${nik}`,
      nama: `${nama}`,
      ttl: `${ttl}`,
      jk: `${jk}`,
      alamat: `${alamat_e}`,
      agama: `${agama_e}`,
      nikah: `${nikah_e}`,
      kerja: `${pekerjaan}`,
      negara: `${kewarganegaraan}`,
    });
    let json_tambah = JSON.stringify(isi);
    let isiData = localStorage.setItem("datatabel", json_tambah);
    form_buat.reset();
  }
});
