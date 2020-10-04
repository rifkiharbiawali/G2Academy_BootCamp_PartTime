//Fungsi tampil data
function buattabel(data) {
  var baris = "";
  for (var i = 0; i < data.length; i++) {
    baris += `
        <tr>
          <td>${i + 1}</td>
          <td class="nik">${data[i].nik}</td>
          <td>${data[i].nama}</td>
          <td>${data[i].ttl}</td>
          <td>${data[i].jk}</td>
          <td>${data[i].alamat}</td>
          <td>${data[i].agama}</td>
          <td>${data[i].nikah}</td>
          <td>${data[i].kerja}</td>
          <td>${data[i].negara}</td>
          <td><button id='btn_edit' onclick='tampilEdit(${i})' class="btn_ubah">Edit</button></td>
          <td><button id='btn_delete' onclick='hapus(${i})' class="btn_ubah">Delete</button></td>
        </tr>
        `;
  }
  document.getElementById("tabel1").innerHTML = baris;
}

let tampilData = localStorage.getItem("datatabel");
let terjemah = JSON.parse(tampilData);
buattabel(terjemah);

// Fungsi Delete
let arr = localStorage.getItem("datatabel");
let terjemahArr = JSON.parse(arr);
function hapus(baris) {
  terjemahArr.splice(baris, 1);
  let kembali = JSON.stringify(terjemahArr);
  let terjemah = localStorage.setItem("datatabel", kembali);
  let ambilLagi = localStorage.getItem("datatabel");
  let terjemah2 = JSON.parse(ambilLagi);
  buattabel(terjemah2);
}

// Fungsi tampil edit
let pilih = document.querySelectorAll("#tabel1 tr");
function tampilEdit(barisE) {
  if (pilih[barisE]) {
    pilih[barisE].innerHTML = `
        <tr>
          <td>${barisE + 1}</td>
          <td><input type="text" value="${
            terjemahArr[barisE].nik
          }" name="nik" id="nik2" /></td>
          <td><input type="text" value="${
            terjemahArr[barisE].nama
          }" name="nama" id="nama2" /></td>
          <td><input type="text" value="${
            terjemahArr[barisE].ttl
          }" name="ttl" id="ttl2" /></td>
          <td><select name="jk" id="jk2">
          <option value="${terjemahArr[barisE].jk}">-Jenis Kelamin-</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
          </select></td>
          <td><textarea
          name="alamt"
          cols="10"
          rows="3"
          id="alamat2">${terjemahArr[barisE].alamat}
          </textarea></td>
          <td><select name="agama" id="agama2">
          <option value="${terjemahArr[barisE].agama}">-Agama-</option>
          <option value="Islam">Islam</option>
          <option value="Kristen">Kristen</option>
          <option value="Hindu">Hindu</option>
          <option value="Budha">Budha</option>
          <option value="Konghucu">Konghucu</option>
          </select></td>
          <td><select name="nikah" id="nikah2">
          <option value="${
            terjemahArr[barisE].nikah
          }">-Status Pernikahan-</option>
          <option value="Menikah">Menikah</option>
          <option value="Single">Single</option>
          <option value="Tidak Menikah">Tidak Menikah</option>
          </select></td>
          <td><input type="text" value="${
            terjemahArr[barisE].kerja
          }" name="kerja" id="kerja2" /></td>
          <td><input type="text" value="${
            terjemahArr[barisE].negara
          }" name="negara" id="negara2" /></td>
          <td><button id='btn_edit2' onclick='Edit(${barisE})' class="btn_ubah">Edit</button></td>
          <td><button id='btn_delete' onclick='hapus(1)' class="btn_ubah" disabled>Delete</button></td>
        </tr>
    `;
  }
}

//Fungsi edit
function Edit(barisE2) {
  location.reload;
  var nik = document.getElementById("nik2").value;
  var nama = document.getElementById("nama2").value;
  var ttl = document.getElementById("ttl2").value;
  var jk = document.getElementById("jk2").value;
  var alamat_e = document.getElementById("alamat2").value;
  var agama_e = document.getElementById("agama2").value;
  var nikah_e = document.getElementById("nikah2").value;
  var pekerjaan = document.getElementById("kerja2").value;
  var kewarganegaraan = document.getElementById("negara2").value;
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
      nik: `${nik}`,
      nama: `${nama}`,
      ttl: `${ttl}`,
      jk: `${jk}`,
      alamat: `${alamat_e}`,
      agama: `${agama_e}`,
      nikah: `${nikah_e}`,
      kerja: `${pekerjaan}`,
      negara: `${kewarganegaraan}`,
    };
  let tampilUbah = localStorage.getItem("datatabel");
  let tampilFix = JSON.parse(tampilUbah);
  let ubahUbah = (tampilFix[barisE2] = dataUbah);
  let ubahData = JSON.stringify(tampilFix);
  let masukData = localStorage.setItem("datatabel", ubahData);
  window.location.href = "http://127.0.0.1:5500/Day%204/Tugas/tabel.html";
}
