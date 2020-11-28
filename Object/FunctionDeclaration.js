// function Sekolah (nama, umur, tinggi, alamat) {
//     var absen = {};
//     absen.nama = nama;
//     absen.umur = umur;
//     absen.tinggi = tinggi;
//     absen.alamat = alamat;
//     return absen;
// }

// var absen1 = Sekolah('Ikbal', 12, 140, 'Tanah Merah' )

// // Constructor

// function Sekolah06 (nama, umur, tinggi, alamat) {
//     this.nama = nama;
//     this.umur = umur;
//     this.tinggi = tinggi;
//     this.alamat = alamat;
// }

// var absen2 = new Sekolah06('ikbal', 12, 140, 'Tanah Merah');

// const Keseharian = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(Keseharian);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let Rian = Mahasiswa('Rian', 20);


// Versi Class :

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {     //kurung Porsi adalah parameter yg bisa kita tambahkan di konsol
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat makan!`;
    }
}

let Apriyanto = new Mahasiswa('Apriyanto', 20);