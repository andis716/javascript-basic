// Modul B 
// Materi 5
// contong pengkondisian menggunakan switch dalam kombinasi popup
var angka = prompt (' masukan angka .. ');
// baris di atas menjadikan popup prompt sebagai nilai variable
switch ( angka ) {
   // menjadikan variable sebagai kondisi pertama
   case '1' :
      // key 1
      // mengembalikan nilai yg di input pada variable angka
      alert (' anda memasukan angka 1 ') ;
      // aksi 
      break ;
   case '2' :
      //  key 2
      //  mengembalikan nilai yg di input pada variable angka
      alert (' anda memasukan angka 2 ') ;
      //  aksi
      break ;
   case '3' : 
      //  key 3
       //  mengembalikan nilai yg di input pada variable angka
      alert (' anda memasukan angka 3 ') ;
      //  aksi
      break ;
   default :
      // selain dari key ( case )
      alert (' yang anda masukan salah ') ;
      // aksi 
      break ;
}
// note :
// dengan pengkondisian menggunakan switch maka kita menggunakan key sebagai optional
//  case adalah key yang bisa di berikan tipe data ( number, string, boolean )
