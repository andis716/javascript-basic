// modul c
// materi 5 recursif pada function
// recursif adalah sebuah function yang memangggil dirinya sendiri
// untuk menghentikan recursif pada function yang berulang kita dapat menggunakan base case
// contoh pemanggilan angka secara berulang dengan function menggunakan teknik recursif sederhana
function tampilAngka (n) {
   if ( n === 0 ){
      return ;
   }
   console.log (n);
   return tampilAngka(n-1);
}
tampilAngka(10);

// keterangan :
// baris if ( n == 0 ) { return ; }          adalah base case
// console.log (n)                           untuk mencetak nilai n
// return tampilAngka (n-1);                 adalah recursif dimana function tersebut memanggil dirinya
//                                                  sebanyak nilai pada argument
// tampilAngka(10);                          argument nilai yang dikirimkan untuk parameter




