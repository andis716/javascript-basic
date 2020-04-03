//  modul B
// materi 4
// latihan menggunakan looping di dalam looping menggunakan for
// menampilkan bintang secara berurut di dalam console
var s = '';
//  baris diatas membuat variable s dengan string kosong
for ( var i = 0; i <= 15; i++ ) {
   // membuat statement baris dalam sebuah variable i di dalam kondisi pertama
   for ( var j = 0 ; j <= i ; j++ ) {
      // membuat statement baris dalam sebuah variable j di dalam kondisi kedua
      s += '*' ;
      // melakukan penugasan / asigment pada variable s yang diisi dengan string *
   }
   s += '\n';
   //  melakukan penugasan / asigment pada variable s yang diisi dengan garis baru
}