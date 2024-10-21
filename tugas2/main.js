
let awal = parseInt(prompt("Isi angka awal \nContoh: 3"));
let akhir = parseInt(prompt("Isi angka akhir \nContoh: 7"));

let hasil = ""; 

for (let i = awal; i <= akhir; i++) {
    if (i % 2 === 0) {
        hasil += "x ";
    } else {
        hasil += i + " ";
    }
}
alert(hasil);
console.log(hasil);