// Modul H
// materi 1
// Rest Parameter

// contoh 1
function myFuncion(a, b, ...myargs) {
   return `a = ${a} b = ${b} myargs = ${myargs}`
}
// maka myargs adalah variable yang menampung nilai lebih dari satu di mulai
   // yang di mulai dari index 2 yaitu ( 3 dan sterusnya )
console.log(myFuncion(1, 2, 3, 4, 5, 6, 7, 8, 9));



// contoh 2 menjumlahkan angka
function jumlahkan(...angka) {
// argument angka untuk menangkap semua parameter yang dikirimkan
   // let total = 0;
   // for ( const ang of angka ) {
   //    total += ang;
   // }
   // return total;

   // menggunakan reduce 
   return angka.reduce(( a, b ) => a + b );
}
console.log(jumlahkan(1, 2, 3, 4, 5));