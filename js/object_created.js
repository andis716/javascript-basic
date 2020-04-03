// Modul E 
// materi 1 terusan latihan_object
// Object dengan Object.create()

const methodMoba = {
      ngebuff : function (jumlah) {
      this.healty += jumlah ;
      console.log(`saya ${this.nama} ambil buff`);
   },
      ulti : function (power) {
      this.healty -= power ;
      console.log(`saya ${this.nama} lelah`);
   }
};
function Moba(nama, healty) {
   let hero = Object.create(methodMoba);
   hero.nama = nama;
   hero.healty = healty ;

   return hero;
}
let hero4 = Moba('franco', 120);
let hero5 = Moba('aldous', 130);
