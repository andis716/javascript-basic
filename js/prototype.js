// Modul E 
// materi 4 terusan object.created()
// Prototype dan Class

// const methodMoba = {
//    ngebuff : function (jumlah) {
//    this.healty += jumlah ;
//    console.log(`saya ${this.nama} ambil buff`);
// },
//    ulti : function (power) {
//    this.healty -= power ;
//    console.log(`saya ${this.nama} lelah`);
// }
// };
// function Moba(nama, healty) {
// let hero = Object.create(methodMoba);
// hero.nama = nama;
// hero.healty = healty ;

// return hero;
// }
// let hero4 = Moba('franco', 120);
// let hero5 = Moba('aldous', 130);

// Prototype Object 
// function moba(nama, healty) {
//    this.nama = nama;
//    this.healty = healty ;
//    }
   
//    moba.prototype.ngebuff = function(jumlah) {
//       this.healty += jumlah ;
//       return `saya ${this.nama} ambil buff`;
//    }
//    moba.prototype.ulti = function(mana) {
//       this.healty -= mana ;
//       return `ultimate ${this.nama} sudah digunakan`;
//    }
//    moba.prototype.defense = function(minus) {
//       this.healty -= minus ;
//       return `saya ${this.nama} akan recall`;
//    }
//    moba.prototype.restore = function(regen) {
//       this.healty += regen ;
//       return `saya ${this.nama} sudah siap`;
//    }

//    let hero = new moba ('alucard', 100 );



// versi class 
class moba {
   constructor (nama, healty){
      this.nama = nama;
      this.healty = healty ;
   }
   ngebuff(jumlah) {
      this.healty += jumlah ;
      return `saya ${this.nama} ambil buff`;
   }
   ulti(mana) {
      this.healty -= mana ;
      return `ultimate ${this.nama} sudah digunakan`;
   }
   defense(minus) {
      this.healty -= minus ;
      return `saya ${this.nama} akan recall`;
   }
   restore(regen) {
      this.healty += regen ;
      return `saya ${this.nama} sudah siap`;
   }
}

let hero = new moba ('alucard', 100 );



