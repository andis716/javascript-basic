// Modul G
// materi 1
// Templete literal 

// HTML fragment 
// contoh 1 html fragment
// Menampilkan object javascript menggunakan html fragment
// menggunakan looping dengan Map untuk menampilkan isi object
// let murid = [
//    {
//       nama : 'Budi',
//       nis : 0998837979
//    },
//    {
//       nama : 'Beni',
//       nis : 0998836658
//    },
//    {
//       nama : 'Dodi',
//       nis : 0998767767
//    },
// ];
// let el = `<div class="mrd">
//             ${murid.map( m => `<ul>
//             <li> ${m.nama}</li>
//             <li> ${m.nis}</li>
//                            </ul>`).join('')}
//          </div>`;
// document.body.innerHTML = el ;



// contoh 2 HTML fragment
// conditional menggunakan operator ternary 
// const lagu = {
//    judul : 'kau adalah',
//    penyanyi : 'isyana',
//    feat : 'ray putra'
// }
// const el = `<div class="lagu">
//             <ul>
//                <li>${lagu.penyanyi}</li>
//                <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//             </ul>
//             </div>`;
// document.body.innerHTML = el;



// contoh 3 HTML fragment bersarang ( nested )
const mahasiswa = {
   nama : 'Adam',
   smester : 5,
   matakuliah : [
      'kalkulus',
      'analisis lingkungan',
      'management',
      'dasar program'
   ]
};
function cetakMataKuliah( matakuliah ) {
   return `<ol>
            ${matakuliah.map( mk => `<li>${mk}</li>`).join('')}
            </ol>`
}
const el = `<div class="mahasiswa">
            <h2>${mahasiswa.nama}</h2>
            <span class="smester"> Smester : ${mahasiswa.smester}</span>
            <h4> Mata Kuliah : </h4> 
            ${cetakMataKuliah(mahasiswa.matakuliah)}
            </div>`;

            

document.body.innerHTML = el;
