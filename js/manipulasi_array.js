// Modul D
// materi 2
// manipulasi array 


// menampilkan isi array menggunakan length dengan cara looping
var arr1 = ['jakarta', 'bogor', 'depok', 'tanggerang', 'bekasi'];
// baris di atas adalah array dengan tipe data string 
for ( var i = 0 ; i < arr1.length ; i++ ) {
   // var i = jumlah isi array 
   // arr.length jumlah karakter pada nilai array
   console.log (arr1[i]);
   // (arr) cetak jumlah array 
   // (i) = mengirimkan argument jumlah elemen pada array
}


// join array
var arr2 = ['ahmad', 'angga', 'denni', 'rudi', 'budi'];
console.log (arr2.join()); 
// menampilkan array dengan cara join 


// pop & push 
// menggunakan push
var arr3 = ['anto', 'heru', 'dedi', 'rido'];
// menambahkan element array di akhir array dengan push pada array nama diatas
arr3.push('dodi');
// untuk melakukan push kita dapat menambahkan beberapa element array sekaligus
// menambahkan nama dodi
console.log(arr3.join());


// menggunakan pop
var arr4 = ['herman', 'yadi', 'dodi', 'jaka', 'adam'];
arr4.pop();
// menghapus nama adam
console.log(arr4.join());



// unshift & shift
// menggunakan unshift
var arr5 = ['satu', 'dua', 'tiga', 'empat'];
// menambahkan elemen array di awal array 
arr5.unshift('nol');
console.log(arr5.join());


// menggunakan shift 
var arr6 = ['minggu', 'senin', 'selasa', 'rabu'];
// menghapus element array di awal array 
arr6.shift();
console.log(arr6.join());


// slice & splice 
// splice 
var arr7 = ['sabtu', 'minggu', 'jumat', 'selasa', 'rabu'];
// rumus 
// splice ( indexAwal, indexYangDihapus, elemenBaru, elemenBaru++.... )
arr7.splice( 2 ,2, 'senin');
// memulai dari index 2 ( 'jumat' ),menghapus index 2 ('jumat') menambahkan ( 'senin' )
console.log(arr7.join());


// foreach & map
// foreach sebuah method pengulangan untuk array
var arr8 = ['januari', 'februari', 'maret', 'april', 'mey', 'juni', 'juli', 'agustus', 'september', 'oktober',
            'september', 'oktober', 'november', 'desember'];
arr8.forEach (function(el){
   console.log(el);
} );

// map 
// map sebuah method pada array untuk mengembalikan nilai array 
var arr9 = [1, 3, 5, 7, 11, 13, 17, 19,];
// array diatas adalah arr9 yang akan digabungkan menjadi array baru ( arr10 )
var arr10 = arr9.map(function(e){
   // menggunakan map method untuk mengembalikan semua elemen yang ada pada arr9
   return e * 2 ;
   // asigmen / penugasan pada arr9 dan arr10 yang akan di kembalikan
});
console.log(arr10.join());


// sort 
// sort sebuah method pada array javascript untuk menyusun array yang memiliki type data number
var arr11 = [ 3, 4, 2, 7, 9, 5, 6, 8, 1 ];
// array di atas adalah array dengan type data number
arr11.sort();
console.log(arr11.join());


// filter & Find 
// filter
// sebuah method pada array untuk melakukan filterisasi elemen array 
var arr12 = [ 3, 4, 5, 6, 7, 8, 9];
var arr13 = arr12.filter(function(x) {
   return x > 6 ;
   // baris di atas melalukan asigment / penugasan untuk melekukan filterisasi
   // pengambilan element yang memiliki nilai array di atas 6
});
console.log(arr13.join());

// find 
// sebuah method pada array yang berfungsi untuk memilih element pada array tersebut 
var arr14 = [8, 3, 4, 5, 1, 9, 6, 7,]
var arr15 = arr14.find(function(f) {
   return  (f == 3);
   // baris di atas melalukan asigment / penugasan untuk memilih elemen array yang 
   // memiliki nilai number 3
   // maka 3 akan diambil dan di jadikan variable arr15
})
console.log(arr15);




