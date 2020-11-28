var tanya = true;
while ( tanya ) {
    var p = prompt('pilih : gajah, semut, orang');

    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    if(p == comp ) {
        hasil = 'SERI!';
    } else if ( p == 'gajah') {
        // if(comp == 'orang') {
        //     hasil = 'MEANG';
        // }else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang' ) ? 'MENANG!' : 'KALAH!'
    } else if ( p == 'orang') {
        hasil = ( comp = 'gajah' ) ? 'KALAH!': 'MENANG!';
    } else if  ( p == 'semut') {
        hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan Pilihan Yang Salah';
    }

    alert ('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya =confirm('Main Lagi?');
}

alert('Terimakasih Telah Bermain');