// Modul E 
// materi 2
// membuat object

// Object literal
// membuat object literal 
let murid = {
   nama : "adam maulana",
   nis : "0808654778",
   kelas : "tiga",
   email : "maulana@gmail.com"
}
console.log(murid);

// Object declaration
// membuat object dengan function declaration
function buatObjectMurid(nama, nis, kelas, email) {
// baris diatas membuat function object dengan mendefinisikan parameter untuk argument
   var murid2 = {};
   // baris diatas mendeclarasikan variable object
   murid2.nama = nama ;
   murid2.nis = nis ;
   murid2.kelas = kelas ;
   murid2.email = email ;
   // baris di atas mengisi property dengan menggunakan parameter function
   return murid2;
   // kembalikan nilai object
}
var murid3 = buatObjectMurid ('denis', '096765456', 'dua', 'dennis@gmail.com');
// baris diatas mengisi object dengan  parameter yang dikirimkan
console.log(murid3);
// untuk membuat object baru dengan struktur yang sama kita hanya perlu membuat
// variable object yang akan di buat menggunakan function buatObjectMurid 
//    yang diisikan parameter untuk property object tersebut 
var murid4 = buatObjectMurid ('resty', '099396773', 'satu', 'resty@gmail.com');
console.log(murid4);

// object constructor 
// membuat object dengan constructor
// contructor pada javascript merupakan cara yang di khususkan untuk membuat object
//    dengan menggunakan keyword new 
function muridBaru(nama, nis, kelas, email) {
   // Dengan menggunakan contrustor kita tidak perlu lagi mendeklarasikan variable di dalam object
   // untuk mengisi property pada object ini kita hanya perlu memanggil keyword this
   this.nama = nama ;
   this.nis = nis ;
   this.kelas = kelas ;
   this.email = email ;
   // dengan menggunakan contructor kita tidak perlu mengembalikan nilai object dengan return
}
var murid5 = new muridBaru('rudy', '098078767', 'tiga', 'rudy@gmail.com');
console.log(murid5);




