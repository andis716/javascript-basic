// Modul F
// materi 3
// Arrow function 

// contoh 1
// contoh penggunaan arrow function pada sebuah function expression
const tampilNama = function(nama) {
   return `hallo ${nama} apakabar`;
}
console.log(tampilNama('budi'));
// script di atas adalah function expression yang belum menggunakan arrow function 

// implementasi arraw function pada function expression 
const tampilNama2 = (nama) => {
   return `hallo ${nama} apakabar`;
}
console.log(tampilNama2('rudi'));
// keyword function sebelumnya pada function expression 
// digantikan dengan arrow function ( => )




// contoh 2 arrow function
const tampilNama3 = function(nama, waktu, kabar) {
   return `hallo ${nama}, selamat ${waktu}, apakah kamu ${kabar}`;
}
console.log(tampilNama3('Devi', 'siang', 'sehat'));
// function expression tanpa arrow

// implementasi dengan arrow
const tampilNama4 = (nama, waktu, kabar) => 
`hallo ${nama}, selamat ${waktu}, apakah kamu ${kabar}`;
console.log(tampilNama4('Dinda', 'Pagi', 'Sakit'));
// dengan menngunakan arrow function return dapat dihilangkan ( implisit return )
// dengan menggunakan arrow function kurung kurawal dapat di hilangkan


// contoh 3 arrow function
// tanpa parameter 
const tampilNama5 = () => `hello world`;
console.log(tampilNama5());
// jika pada function expression tidak menggunakan parameter
// maka kita hanya perlu menambahkan tanda kurung untuk parameter kosong


// contoh 4 
// menampilkan length pada array
let murid = ['rudi', 'dodi', 'ferdi'];
let jumlahHuruf = murid.map(function(nama){
   return nama.length;
})
console.log(jumlahHuruf);
// script di atas sebelum mengguanakan arrow function

let murid2 = ['bobi', 'jaka', 'heru'];
let jumlahHuruf2 = murid2.map ( nama => nama.length ) ; 
console.log(jumlahHuruf2);
// script di atas setelah menggunakan arrow function

