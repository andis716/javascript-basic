// MODUL B 
// 2). Popup pada javascript
// contoh penulisan popup confirmasi kepada user dengan menggunakan 
// kombinasi alert, prompt dan confirm
alert ('selamat datang .. !') ;
// baris di atas adalah alert sederhana
var lanjutkan = true ;
// baris diatas adalah variable dengan nilai boolean
while ( lanjutkan ) {
   // baris di atas adalah kondisi pemanggilan variable untuk pengulangan
   var nama = prompt ('masukan nama :');
   //  baris diatas adalah variable yang berisi popup prompt
   alert (' hallo ' + nama );
   // mengembalikan nilai input prompt yang dimasukan user ke dalam alert
   lanjutkan = confirm ( 'coba lagi ' );
   // pemanggilan variable lanjukankan untuk diulang sebagai popup confirm
}
alert (' terimakasih ');

