// Modul F
// materi 2
// Execution context hoisting dan scope
// contoh 1
   // var nama = "budi";
// pada penulisan di atas yaitu :
   // fase creation pada global context
   // semua variable akan di jadikan typedata undifined
   // jika ada function maka akan diisi dengan functio itu sendiri
   // kosep ini disebut hoisting
   // javascript mendefinisikan object window sebagai global object 
   // dan javascript mendefinisikan this sebagai window 
   // console.log(nama);
// execution fase
   // fase execution setelah fase creation 
   // console.log(nama); akan melakukan execution var nama


   // contoh 2 
   var name = 'david';
   var age = 30;
   // penulisan 2 variable di atas adalah fase creation
   console.log(kataHello());
   function kataHello() {
      return `hallo nama saya ${name}, umur saya ${age} tahun`;
   }
   // baris di atas adalah function yang akan di eksekusi ( fase execution )
   // proses eksekusi pada function tidak bisa di lakukan di atas 2 variable tersebut
   // function membuat lokal execution context 
   // yang di dalamnya terdapat fase creation dan execution fase
   // window 
   // argument
   // hoisting