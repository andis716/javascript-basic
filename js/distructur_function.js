// Modul G
// materi 4
// Distructuring pada function 

// contoh 1 function pada array
// function kalkulasi(a,b){
//    return [ a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// untuk melakukan distructuring sperti ini pada array urutan harus pas (sesuai)
// console.log(tambah);


// contoh 2 distructuring function pada object
function kalkulasi2( ab, cd) {
   return {
      tambah : ab + cd,
      kurang : ab - cd,
      kali   : ab * cd,
      bagi   : ab / cd 
   }
}
const { bagi, tambah, kali, kurang } = kalkulasi2(5,4);
// penulisan variable object boleh tidak sesuai urutan
// karna dengan object asumsi yan digunakan adalah properti
// 5 ,4 adalah argument yang dikirimkan untuk param function
console.log(tambah);



// contoh 3 distructur pada function argument 
const murid = {
   nama : 'Rhoma',
   umur : 20,
   kelas : 'duabelas',
   nilai : {
      tugas : 90,
      uas : 67,
      uts : 79,
   }
}
function cetakMurid({nama, umur, kelas, nilai : { tugas, uas, uts } }) {
   // baris di atas adalah distructuring parameter pada object yang memiliki property object
   return `hallo, nama saya ${nama} umur saya ${umur} saya kelas ${kelas} dan nilai uas saya 
   adalah ${uas}`;
}
// baris di atas adalah function declaration
console.log(cetakMurid(murid));
// murid di ambil dari proprti object untuk dikirimkan pada function cetakMurid
// lalu parameter pada function declaration di ambil oleh expression



