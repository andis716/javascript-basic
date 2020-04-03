// Modul G
// materi 2

// membuat highligt pada tag templete 
const nama = 'Rhoma';
const umur = 30;

function highligt(strings, ...values) {
   return strings.reduce((result, str, i ) => `${result}${str}<span class="hl">
   ${values[i] || ''}</span>`, '');
}
const str = highligt`hallo nama saya ${nama} umur saya ${umur} tahun.`;
document.body.innerHTML = str;