// Modul B
// Materi 4 
// For of dan for in

// contoh penggunaan for biasa 
const siswa = ['rendi', 'rudi', 'heru', 'jaka', 'darma'];
for( i = 0 ; i < siswa.length; i++ ) {
   console.log(siswa[i]);
}

// conto penggunaan forEach
siswa.forEach( m => console.log(m));


// contoh 1 Penggunaan pada for of untuk array
for ( const m of siswa ) {
   // const m adalah variable iterable
   console.log(m);
}


// contoh penggunaan for of untuk array 
for (const [i,nm] of siswa.entries() ) {
   console.log(`${nm} adalah siswa ke -${i}`);
}


// contoh 2 penggunaan for of untuk string
const nama = 'ridwan';
for ( const n of nama ) {
   console.log(n);
}



// contoh penggunaan for of untuk argument
function jumlahkanAngka() {
   let jumlah = 0;
   for ( ang of arguments ) {
      jumlah += ang;
   }
return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// contoh penggunaan for in untuk mengulang property papa object
const mahasiswa = {
   nama : 'Maulana',
   umur : 25,
   kelas : 'tiga'
}
for ( mhs in mahasiswa ) {
   console.log(mhs);
}
// untuk mengambil value property pada object tersebut tambahkan parameter mhs
for ( mhs in mahasiswa ) {
   console.log(mahasiswa[mhs]);
}



