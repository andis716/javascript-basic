// Modul F
// materi 4
// this pada arrow function 

// konsep this pada arrow function 
// contoh 1 constructor function 
// let Mahasiswa = function () {
//    this.nama = 'rudy';
//    this.umur = 40;
//    this.sayHello = function() {
//       console.log (`hello ${this.nama} umur ${this.umur}`);
//    }
// }
// let namaSiswa = new Mahasiswa();
// script diatas  belum menggunakan this arrow function 

// let Mahasiswa1 = function () {
//    this.nama = 'beni';
//    this.umur = 30;
//    this.sayHello =() => {
//       console.log (`hello ${this.nama} umur ${this.umur}`);
//    }
// }
// let namaSiswa1 = new Mahasiswa1();
// script di atas adalah object dengan constructor function
// yang sudah di implementasikan dengan this arrow function
// kesimpulan hanya sedikit perubahan ketika mengimplementasikan
// this arrow function pada object constructor function 


const box = document.querySelector('.box');
box.addEventListener('click', function() {
   let satu = 'size';
   let dua = 'caption';
   
   if(this.classList.contains(satu)) {
      [satu,dua] = [dua,satu];
   }
   this.classList.toggle(satu);
      setTimeout(() => {
      this.classList.toggle(dua);
   },600);
});



