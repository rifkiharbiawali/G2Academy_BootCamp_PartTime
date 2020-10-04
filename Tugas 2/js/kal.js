// Fungsi Buat Tombol
function buat_tombol() {
  let tombol = "";
  for (let i = 0; i < 10; i++) {
    tombol += `
        <input type="button" value="${i}" onclick="cetak(${i})" />
        `;
  }
  let tombol_kal = (document.getElementById("tombol_kal").innerHTML = tombol);
}
buat_tombol();

// Fungsi cetak
var angka = document.tampil.print_k;
function cetak(a) {
  angka.value += a;
}

function hasil() {
  angka.value = eval(angka.value);
}

// // Fungsi hapus
function hapus() {
  angka.value = "";
}
