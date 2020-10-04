//auto cari
function auto_cari() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("auto_cari");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabel_auto");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[2];

    if (td1) {
      txtValue1 = td1.textContent || td1.innerText;
      if (txtValue1.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//Fungsi tampil data
function buattabel(data) {
  var baris = "";
  for (var i = 0; i < data.length; i++) {
    baris += `
        <tr>
          <td>${i + 1}</td>
          <td class="nik">${data[i].id}</td>
          <td>${data[i].jenisKendaraan}</td>
          <td>${data[i].noPlat}</td>
          <td>${data[i].masukJ}:${data[i].masukM}</td>
          <td>${data[i].keluar}</td>
          <td>${data[i].lamaParkir} menit</td>
          <td>${data[i].tarif}</td>
          <td><button id='btn_edit' onclick='tampilEdit(${i})' class="btn_ubah">Hitung</button></td>
          <td><button id='btn_delete' onclick='hapus(${i})' class="btn_ubah" desabled>Keluar</button></td>
        </tr>
        `;
  }
  document.getElementById("tabel1").innerHTML = baris;
}

let tampilData = localStorage.getItem("dataParkir");
let terjemah = JSON.parse(tampilData);
buattabel(terjemah);

// Fungsi hitung
let pilih = document.querySelectorAll("#tabel1 tr");
let waktu = new Date();
let uang = new Intl.NumberFormat("de-DE");
function tampilEdit(barisE) {
  let Jam = waktu.getHours();
  let Menit = waktu.getMinutes();
  let hitunganW =
    (Jam - terjemah[barisE].masukJ) * 60 + (Menit - terjemah[barisE].masukM);
  if (pilih[barisE]) {
    pilih[barisE].innerHTML = `
        <tr>
          <td>${barisE + 1}</td>
          <td>${terjemah[barisE].id}</td>
          <td><input type="text" id="jk2" placeholder="Jenis Kendaraan" maxlength="2" /></td>
          <td>${terjemah[barisE].noPlat}</td>
          <td>${terjemah[barisE].masukJ}:${terjemah[barisE].masukM}</td>
          <td>${Jam}:${Menit}</td>
          <td>${hitunganW} Menit</td>
          <td><input type="text" id="jk3" placeholder="Tarif" maxlength="2" disabled /></td>
          <td><button id='btn_edit2' onclick='Edit(${barisE})' class="btn_ubah">Hitung</button></td>
          <td><button id='btn_delete' onclick='hapus(${barisE})' class="btn_ubah">Keluar</button></td>
        </tr>
    `;
  }
  let jkSelect = document.getElementById("jk2");
  let jkSelect3 = document.getElementById("jk3");
  jkSelect.addEventListener("change", function () {
    if (jkSelect.value === "mb") {
      jkSelect3.value = `Rp. ${uang.format(3000 * (hitunganW - 2) + 5000)}`;
    } else if (jkSelect.value === "mt") {
      jkSelect3.value = `Rp. ${uang.format(1000 * (hitunganW - 2) + 3000)}`;
    } else {
      alert("Jenis Kendaraan mb/mt?");
    }
  });
}

//Fungsi edit
function Edit(barisE2) {
  let Jam = waktu.getHours();
  let Menit = waktu.getMinutes();
  let hitunganW =
    (Jam - terjemah[barisE2].masukJ) * 60 + (Menit - terjemah[barisE2].masukM);
  let jenisK = document.getElementById("jk2").value;
  let tarif = document.getElementById("jk3").value;
  let dataUbah =
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
    {
      id: `${terjemah[barisE2].id}`,
      jenisKendaraan: `${jenisK}`,
      noPlat: `${terjemah[barisE2].noPlat}`,
      masukJ: `${terjemah[barisE2].masukJ}`,
      masukM: `${terjemah[barisE2].masukM}`,
      keluar: `${Jam}:${Menit}`,
      lamaParkir: `${hitunganW}`,
      tarif: `${tarif}`,
    };
  let tampilUbah = localStorage.getItem("dataParkir");
  let tampilFix = JSON.parse(tampilUbah);
  let ubahUbah = (tampilFix[barisE2] = dataUbah);
  let ubahData = JSON.stringify(tampilFix);
  let masukData = localStorage.setItem("dataParkir", ubahData);

  let dataKe = tampilFix[barisE2];
  document.getElementById("printKarcis").innerHTML = `
      <h1>--Karcis Parkir Mall Rifki--</h1>
      <p>No Id : ${dataKe.id}</p>
      <p>No Plat : ${dataKe.noPlat}</p>
      <p>Masuk : ${dataKe.masukJ}:${dataKe.masukM}</p>
      <p>Keluar : ${dataKe.keluar}</p>
      <p>Lama Parkir : ${dataKe.lamaParkir} Menit</p>
      <p>Tarif : ${dataKe.tarif}</p>
      <p>Tarif Motor Rp. 3000/2menit, 1000 untuk menit berikutnya</p>
      <p>Tarif Mobil Rp. 5000/2menit, 3000 untuk menit berikutnya</p>
      <h2>--Terimakasih--</h2>
      `;

  let pilih = document.querySelectorAll("#tabel1 tr");
  pilih[barisE2].innerHTML = `
        <tr>
          <td>${barisE2 + 1}</td>
          <td>${tampilFix[barisE2].id}</td>
          <td>${tampilFix[barisE2].jenisKendaraan}</td>
          <td>${tampilFix[barisE2].noPlat}</td>
          <td>${tampilFix[barisE2].masukJ}:${tampilFix[barisE2].masukM}</td>
          <td>${tampilFix[barisE2].keluar}</td>
          <td>${tampilFix[barisE2].lamaParkir} Menit</td>
          <td>${tampilFix[barisE2].tarif}</td>
          <td><button id='btn_edit2' onclick='Edit(${barisE2})' class="btn_ubah">Hitung</button></td>
          <td><button id='btn_delete' onclick='hapus(${barisE2})' class="btn_ubah">Keluar</button></td>
        </tr>
    `;

  // window.location.href = "http://127.0.0.1:5500/Day%205/Tugas/tabel.html";
}

// // Fungsi Delete
let arr = localStorage.getItem("dataParkir");
let terjemahArr = JSON.parse(arr);
function hapus(baris) {
  terjemahArr.splice(baris, 1);
  let kembali = JSON.stringify(terjemahArr);
  let terjemah = localStorage.setItem("dataParkir", kembali);
  let ambilLagi = localStorage.getItem("dataParkir");
  let terjemah2 = JSON.parse(ambilLagi);
  buattabel(terjemah2);
}
