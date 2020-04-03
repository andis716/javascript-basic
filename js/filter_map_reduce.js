// Modul G
// materi 5 
// filter, map & reduce 

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >= 3 dengan for
const newAngka = [];
for ( let i = 0; i < angka.length ; i++ ) {
   if (angka[i] >= 3 ) {
      newAngka.push(angka[i]);
   }
}
console.log(newAngka);



// filter
// mencari angka >= dengan filter 
const newAngka2 = angka.filter(function(a) { 
   // function diatas adalah callback untuk parameter
   //    dari representasi element tiap tiap tiap angka
   return a >= 3;
});
console.log(newAngka2);

// menacri angka >= 3 dengan filter yang menggunakan arrow function
const newAngka3 = angka.filter( a => a >= 3 );
// pada baris di atas function digantikan dengan arrow function
// karna menggunakan arrow function maka ( return ) dan {} di hilangkan
console.log(newAngka3);



// map 
// mengalikan semua angka di dalam array dengan 2 
const newAngka4 = angka.map( a => a * 2 );
console.log(newAngka4); 
// baris di atas menggunakan arrow function
// map = petakan semua array dengan fungsi yang baru



// reduce 
// menjumlahkan seluruh element pada array 
const newAngka5 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );
// 0 adalah nilai awal ( bukan index ) melainkan nilai yang terdapat saat reduce digunakan
// nilai 0 dapat di rubah sesuai yang kita inginkan
// untuk reduce menggunakan 2 parameter yaitu
// accumulator dan currentValue 
console.log(newAngka5);



// method chaining / method berantai
// method chaining pada higher Order
// cari angka > 5
// kalikan 3 
// jumlahkan 
const hasil = angka.filter( a => a > 5) // 8 9 9
.map( a => a * 3 ) // 24 27 27 
.reduce((acc, cur ) => acc + cur );

console.log(hasil);