let objekAwal = prompt("Isi objek awal \nContoh: 3");
let objekAkhir = prompt("Isi objek akhir \nContoh: 7");

let hasil = "";

for (let i = 0; i < objekAwal; i++) {
    for (let j = 0; j < objekAkhir; j++) {
        hasil += "* ";
    }
    hasil += "\n";
}

console.log(hasil);
alert(hasil);