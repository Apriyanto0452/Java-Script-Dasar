for(noAngkot = 1; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot No.' + noAngkot + ' Beroprasi Dengan Baik.')
    } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
        console.log('Angkot No.' + noAngkot + ' Sedang Lembur.')
    } else {
        console.log('Angkot No.' + noAngkot + ' Sedang Tidak Beroprasi.')
    }
}