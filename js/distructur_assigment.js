// Modul G
// Materi 3
// Distructuring Assigment

// contoh 1 distructuring pada array 
const benda = ['buku', 'tas', 'bolpen', 'pencil'];
const [ a, b, c, d] = benda;
// a b c dan d merupakan stuktur pada aaray berdasarkan urutan
// struktur diatas dapat di skip atau di lewati dengan dikosongkan dengan tanda ( , , ,) 
console.log(a);


// contoh 2 swap item
// menukar isi pada array dengan distructuring 
// let ac = 1;
// let bd = 2;
// console.log(ac);
// console.log(bd);
// [ ac, bd ] = [ bd, ac ];
// penukaran nilai pada isi variable di atas
// console.log(ac);
// maka nilai ac akan berubah menjadi 2


// contoh 3 return value pada function 
// function coba() {
//    return [ 400, 500 ];
// }
// const[ abc, def ] = coba();
// console.log(abc);



// contoh 3 rest parameter
// const [ satu, ...values ] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// 1 masuk pada variable 1
// ...values adalah variable untuk menyimpan nilai ( sesudah variable satu )
// console.log(satu);
// console.log(values);
// cetak values
// maka semua variable setelah angka 1 akan di cetak sebagai array




// contoh 4 distructuring assigment
// distructuring pada object literal
// const murid = {
//    nama : 'budi',
//    umur : 90,
//    kelas : 12
// }
// const { nama, umur, kelas } = murid;
// console.log(nama);




// contoh 4 distructuring pada object 
// tanpa melakukan deklarasi pada object tersebut / Assignment tanpa declarai object
// ({ nama, umur, kelas } = {
//    nama : 'budi',
//    umur : 90,
//    kelas : 12
// });
// console.log(nama);


// contoh 5 distruction ke variable baru
// const murid = {
//    nama : 'budi',
//    umur : 90,
//    kelas : 12
// };
// const {nama: n, umur: u, kelas: k} = murid;
// console.log(n);



// contoh 6 distructuring 
// mengambil field pada object setelah dikirim sebagai parameter pada functtion
const murid = {
   id : 97386,
   nama : 'budi',
   umur : 90,
   kelas : 12
};
function getIdMurid({id}) {
   return id;
}
console.log(getIdMurid(murid));