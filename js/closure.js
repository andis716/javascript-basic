// Modul F
// materi 1
// Closures 

// Contoh closures 1
function init () {
   let nama = 'Sanjaya';
   // local variable / scope variable pada function 
   function tampilNama(){
      // inner function / function yang terdalapat didalam function 
      // inner function ini yang di sebut (Closures)
      console.log(nama);
      // eksekusi yang mengakses ke parent variable
   }
   tampilNama();
}
init();


// contoh 2 closures
function ucapkanSalam(waktu) {
   // baris di atas function pembungkus closures
   return function(nama) {
      // baris diatas adalah inner function // closure
      console.log(`hallo ${nama}, selamat ${waktu}`);
   }
}
let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatSore = ucapkanSalam('sore');
let selamatMalam = ucapkanSalam('malam');
// memanggil function pembungkus dengan mengirimkan argument ke parameter function pembungkus

selamatPagi('andi');
selamatMalam('budi');
// memanggil variable dengan mengirimkan argument ke parameters inner function 



// contoh 3 closures 
// membuat counter 
let add = (function() {
   // mendeklarasikan function pembungkus ke dalam variable
   let counter = 0;
   // mendeklarasikan nilai variable scope
   return function () { 
      // mengembalikan nilai dengan inner function // closures
      return ++counter ; 
      // mengembalikan kondisi counter
   }
})();
console.log(add());
console.log(add());
console.log(add());
console.log(add());




