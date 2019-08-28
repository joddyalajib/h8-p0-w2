// // Soal Nomor 1

var rows1 = 5;

for (i = 0; i < rows1; i++) {
    console.log("*");
}

// // Soal Nomor 2


var rows2 = 5;
var result = "";
for (j = 0; j < rows2; j++) {
    for (i = 0; i < rows2; i++) {
        result += '*'
    }
    console.log(result);
    result = "";
}

// Soal Nomor 3

var rows3 = 5;
var result3 = "";

for (j = 0; j < rows3; j++) {
    for (i = 0; i <= j; i++) {
        result3 += '*'
    }
    console.log(result3);
    result3 = "";
}