// Modul G
// Materi 7
// Spread Oprator
// memecah iterables menjadi single element

// contoh 1 spread pada array
const murid = [ 'budi', 'rendi', 'dodi', 'herman',];
console.log(...murid);
// maka pada konsole siswa di jadikan 1 buah string
// ( ... ) adalah spread opreator

// contoh 2 mengambil index pada element array
console.log(...murid[0]);


// contoh 3 menggabungkan 2 buah array
const siswa = [ 'deni', 'hero', 'ridho', 'dodi' ];
const siswi = [ 'devi', 'rini', 'ulfa', 'resti'];
const orang = [ ...siswa,'aji', ...siswi ];
console.log(orang);


