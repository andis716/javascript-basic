// Modul E 
// materi 3
// Penggunaan this pada object 

// cara 1 - menggunakan function declaration
function declaration(){
   console.log('ini declaration');
}
declaration();


// cara 2 - object literal 
var obj = {};
// deklari object di dalam variable
obj.iniLiteral = function() {
   // membuat method di dalam object
   console.log('ini literal');
}
obj.iniLiteral();
// kirimkan argument untuk parameter function


// cara 3 - constructor function 
function constructor() {
   console.log('ini constructor');
}
new constructor();


// 3 contoh di atas sebelum menggunakan this
// keyword ( this ) == keyword ( window )
// dalam scope global this adalah window

// cara 1 - menggunakan function declaration dan keyword this
function declarationThis(){
   console.log(this);
   console.log('Hai declaration dengan this');
}
this.declarationThis(); 
// mengembalikan object global
// kesimpulan :
// pada object declaration keyword this akan mengembalikan object global


// cara 2 - object literal dan keyword this
var obj = {};
// deklari object di dalam variable
obj.iniLiteralThis = function() {
   // membuat method di dalam object
   console.log(this);
   console.log('ini literal dengan this');
}
this.obj.iniLiteralThis();
// mengembalikan object yang bersangkutan
// kesimpulan 
// pada object literal keyword this akan mengembaikan object yang bersangkutan 


// cara 3 contructor function dengan this
function constructorThis() {
   console.log(this);
   console.log('ini constructor dengan this');
}
new constructorThis();
// mengembalikan object yang baru di buat
// pada object constructor this mengambalikan object yang baru di buat oleh keyword (new)



