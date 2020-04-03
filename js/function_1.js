// modul c
// materi 2 funcrion
// contoh penggunaan function
// menjumlahkan 2 buah kubus menggunakan function declaration
function jumlahVolumDuaKubus (a,b) {
   var volumA ;
   var volumB ;
   var total ;

   volumA = a * a * a ;
   volumB = b * b * b ;

   total = volumA + volumB ;
   return total ;
}
console.log ( jumlahVolumDuaKubus (8,3));
//  Script di atas belum menggunakan konsep refactoring

// Keterangan :
// function = Keyword function
// jumlahVolumDuaBuahKubus = nama function 
// ( a, b) = parameter 
// var volum = variable masing masing kubus
// var total = variable total 2 buah kubus
// total = volumA + volumB = Asigment / penugasan
// return total = mengembalikan value pada function tersebut
// console.log ( jumlahVolumDuaBuahKubus ) = memanggil dan mencetak hasil nilai function
// ( 8, 3 ) = argument untuk mengirimkan nilaipada paratameters masing masing kubus

// modul C
// materi 4 refactoring pada function
// contoh implementasi refactoring pada funcion menjumlahkan 2 buah kubus 
function jumlahVolumDuaBuahKubus (a,b) {
   return a * a * a + b * b * b ;
}
console.log ( jumlahVolumDuaBuahKubus (10,5));
