// Modul E
// latihan Object pada javascript 

// Object Literal 
// Penggunaan object literal 
let hero = {
   nama : 'Alucard',
   healty : 100,
   ngebuff : function (jumlah){
      this.healty = this.healty + jumlah ;
      console.log (`saya ${this.nama}, ambil buff`);
   }
}

let hero2 = {
   nama : 'martis',
   haealty : 200,
   ngebuff : function (jumlah){
      this.healty = this.healty + jumlah ;
      console.log (`saya ${this.nama} ambil buff`);
   }
}



// Object dengan function declaration 
function Moba(nama, healty) {
   let hero = {};
   hero.nama = nama;
   hero.healty = healty ;
   
   hero.ngebuff = function (jumlah) {
      this.healty += jumlah ;
      console.log(`saya ${this.nama} ambil buff`);
   }
   return hero;
   // untuk object function declaration yg mana di dalam object terdapat method
   // maka perlu dilakukan return untuk mengembalikan nilai
}
let hero4 = Moba('franco', 120);
// dengan menggunakan object function declaratio kita dapat membuat hero berikutnya
// hanya dengan melakukan instansiasi dengan variable baru
// contoh dibawah ini :
let hero5 = Moba('aldous', 130);




// Object dengan constructor
// keyword new 
function farming(nama, healty) {
   this.healty = healty ;
   this.nama = nama;

   this.ngebuff = function (jumlah) {
      this.healty += jumlah ;
      console.log(`saya ${this.nama} ambil buff`);
   }
}
let hero6 = new farming('zilong', 120);
