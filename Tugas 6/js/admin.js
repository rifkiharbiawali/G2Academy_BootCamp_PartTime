let dataAdmin = [];
if (localStorage.getItem("dataAdmin")) {
  dataAdmin = JSON.parse(localStorage.getItem("dataAdmin"));
}
let dataAdmin1 = document.getElementsByTagName("form")[0];
dataAdmin1.addEventListener("submit", function (ev) {
  ev.preventDefault;
  let namaO = document.getElementById("namaO").value;
  let namaA = document.getElementById("namaA").value;
  let emailO = document.getElementById("emailO").value;
  let passwordO = document.getElementById("passwordO").value;
  let deskripsiO = document.getElementById("deskripsiO").value;
  let alamatO = document.getElementById("alamatO").value;
  if (
    namaO === "" ||
    namaA === "" ||
    emailO === "" ||
    passwordO === "" ||
    deskripsiO === "" ||
    alamatO === ""
  ) {
    alert("Data Jangan Sampai Kosong!");
    window.location.href =
      "http://127.0.0.1:5500/Tugas_G2Academy_BootCamp/Tugas%206/register.html";
  } else {
    dataAdmin.push({
      namaO: `${namaO}`,
      namaA: `${namaA}`,
      emailO: `${emailO}`,
      passwordO: `${passwordO}`,
      deskripsiO: `${deskripsiO}`,
      alamatO: `${alamatO}`,
    });
    let tambahData = JSON.stringify(dataAdmin);
    let isiData = localStorage.setItem("dataAdmin", tambahData);
    dataAdmin1.reset();
  }
});
