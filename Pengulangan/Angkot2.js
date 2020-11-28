var jmlAngkot = 10;
var angkotBeroprasi = 5;
var noAngkot = 1;

while(noAngkot <= angkotBeroprasi) {
    console.log('Angkot No.' + noAngkot + " Beroprasi Dengan Baik.")
    noAngkot++;
}

for(var noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No.' + noAngkot + " Sedang Tidak Beroprasi.")
}