// Soal Nomor 1
var judul1 = "LOOPING PERTAMA";
console.log(judul1);

var n = 2;

while (n <= 20) {
    console.log(n + " - I love coding");
    n += 2;
}

var judul2 = "LOOPING KEDUA";
console.log(judul2);

var n2 = 20;

while (n2 >= 2) {
    console.log(n2 + " - I will become fullstack developer");
    n2 -= 2;
}

// Soal Nomor 2

console.log(judul1);

for (n3 = 1; n3 <= 20; n3++) {
    console.log(n3 + " - I love coding");
} 


console.log(judul2);

for (n4 = 20; n4 >= 1; n4--) {
    console.log(n4 + " - I will become fullstack developer");
}

// Soal Nomor 3

for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}


// -perulangan 1
for (j = 1; j <=100; j += 2) {
    if (j % 3 === 0) {
        console.log(j + " KELIPATAN 3");
    }
}




// -perulangan 2
for (k = 1; k <=100; k += 5) {
    if (k % 6 === 0) {
        console.log(k + " KELIPATAN 6");
    }
}

// -perulangan 3
for (l = 1; l <=100; l += 9) {
    if (l % 10 === 0) {
        console.log(l + " KELIPATAN 10");
    }
}



















