var tanya = true;
var angka = Math.floor(Math.random() * 10 + 1);
console.log(angka);
var nyawa = 3;

while (tanya) {
  var x = prompt(
    "Tebak Angka Dari 1 sampai 10 : \n Kesempatan anda : " + nyawa
  );
  var p = parseInt(x);
  if (x !== angka) {
    nyawa--;
  }
  
  if (p < angka) {
    alert("Terlalu RENDAH! \n ayo masih ada " + nyawa + " kesempatan");
  } else if (p > angka) {
    alert("Terlalu TINGGI \n ayo masih ada " + nyawa + " kesempatan");
  } 
  
  if (p === angka) {
    alert(
      "Anda Memasukan Angka " +
        p +
        " Dan Jawaban Komputer adalah " +
        angka +
        "\nMaka tebakan anda Benar!"
    );
    tanya = confirm("Tebak Lagi ?");
    nyawa = 3;
  }
  if (nyawa === 0) {
    alert('Game Over / Nyawa anda telah abis!')
    alert(
      "Anda Memasukan Angka " + p + " Dan Jawaban Komputer adalah " + angka
    );
    tanya = confirm("Tebak Lagi ?");
    nyawa = 3;
  }
}

alert("Terimakasih Telah Bermain");
