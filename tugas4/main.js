 let angka = prompt("Masukkan batas angka maksimal 15:");

 for (let i = 1; i <= angka; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log("FizzBuzz");
         alert("FizzBuzz");
     } else if (i % 3 === 0) {
         console.log("Pondok");
         alert("Pondok");
     } else if (i % 5 === 0) {
         console.log("Informatika");
         alert("Informatika");
     } else {
         console.log(i);
         alert(i);
     }
 }