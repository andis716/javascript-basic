// modul B
// materi 5
// Contoh pengulangan menggunakan else if dalam sebuah kombinasi popup
var angka = prompt ('masukan angka !');
//  baris di atas menjadikan popup prompt sebagai variable
if ( angka % 2 === 0 ) {
   // baris di atas membuat statment dalam kondisi pertama
   alert ( angka + ' bilangan genap ' );
   // mengembalikan nilai apapun yang di inputkan user dalam popup prompt
   //  dan dimasukan kedalam popup alert
} else if ( angka % 2 === 1 ) {
   // baris diatas membuat statment baru dalam kondisi kedua 
   alert ( angka + ' bilangan ganjil ' );
   //  mengembalikan nilai apapun yang di inputkan user dalam popup prompt
   //  dan di masukan kedalam popup alert
} else {
   // kondisi ketiga tanpa statement
   alert ( ' yang anda masukan bukan angka ' );
}