// Modul A
// materi 5 
// variable var, let & const 

// contoh var di dalam looping 
for ( var i = 0 ; i <= 10 ; i++ ) {
   console.log(i); 
   // eksekusi di dalam function looping
}
console.log(i);
// eksekusi di luar function looping
// maka pada console akan mengeluarkan output yang sama
// kesimpulan :
// var adalah variable global yang dapat di eksekusi di luar loop


// contoh let di dalam looping 
for ( let a = 0 ; a < 5 ; a++ ) {
   console.log(a);
}
// let tidak dapat di eksekusi di luar scope for
// kesimpulan :
// variable let memiliki konsep function scope 


// contoh const pada penulisan array
const angka = [1,2,3,4,5];
console.log(angka);
// penulisan array di atas tidak dapat di timpa dengan array yang sama 
// dengan nilai elemen yang berbeda 
