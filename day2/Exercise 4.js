var array = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(array) {
//Roman Alamsyah Elsharawy
array.splice(1,1, "Roman Alamsyah Elsharawy");
//Provinsi Bandar Lampung
array.splice(2,1, "Provinsi Bandar Lampung");
//Pria
array.splice(4,0, "Pria");
//SMA Internasional Metro
array.splice(5,1, "SMA Internasional Metro");
console.log(array);
console.log('________________________________');
//Mei
var bulan = array[3].split("/");
var bulanHuruf = "";
switch (bulan[1]) {
  case "01" : bulanHuruf="Januari"; break;
  case "02" : bulanHuruf="Januari"; break;
  case "03" : bulanHuruf="Januari"; break;
  case "04" : bulanHuruf="Januari"; break;
  case "05" : bulanHuruf="Januari"; break;
  case "06" : bulanHuruf="Januari"; break;
  case "07" : bulanHuruf="Januari"; break;
  case "08" : bulanHuruf="Januari"; break;
  case "09" : bulanHuruf="Januari"; break;
  case "10" : bulanHuruf="Januari"; break;
  case "11" : bulanHuruf="Januari"; break;
  case "12" : bulanHuruf="Januari"; break;
  default:
}
console.log(bulanHuruf);
console.log('________________________________');
//[1989, 21, 05]
var simpanTanggal = [];
for (var i = 0; i < bulan.length; i++) {
  simpanTanggal.push(parseInt(bulan[i]));
}
simpanTanggal.sort(function(value1,value2) {return value1 < value2});
var simpanHasil = simpanTanggal[2].toString();
var tambah0 = '';
if (simpanHasil < 10) {
  tambah0 += 0;
}
var a = tambah0 + simpanHasil; 
simpanTanggal.splice (2,1, a);
console.log(simpanTanggal);
console.log('________________________________');

// 21-05-1989
console.log(bulan.join('-'));

//Roman Alamsyah
console.log(array[1].split(' ').slice(0,2).join(' '));
}

dataHandling2(array);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
