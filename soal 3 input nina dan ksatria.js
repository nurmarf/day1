var nama = 'Nina'
var peran ='Ksatria'
if((nama == false) && (peran == false)) {
  console.log('Nama harus diisi!')
}
else if((nama == true) || (peran == false)) {
  console.log('halo ', nama, 'Pilih peranmu untuk memulai game!' )
}

else if((nama !== true) && (peran !== true)) {
  console.log("Selamat datang di Dunia Proxytia, ", nama,
"Halo ", peran, nama, " Kamu dapat menyerang dengan senjatamu!")
}