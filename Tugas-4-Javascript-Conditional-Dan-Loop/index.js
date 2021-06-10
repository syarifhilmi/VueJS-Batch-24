// soal 1

var nilai = 75
var indeks

if (nilai) {
    if (nilai >= 85) {
        indeks = 'A'
    }
    else if (nilai >= 75 && nilai < 85) {
        indeks = 'B'
    }
    else if (nilai >= 65 && nilai < 75) {
        indeks = 'C'
    }
    else if (nilai >= 55 && nilai < 65) {
        indeks = 'D'
    }
    else if (nilai < 55) {
        indeks = 'E'
    }
    console.log(indeks)
}
else {
    console.log('Variabel nilai kosong')
}

// soal 2

var tanggal = 22
var bulan = 7
var tahun = 2020

var definisiBulan

switch (bulan) {
    case 1: { definisiBulan = ' Januari '; break }
    case 2: { definisiBulan = ' Februari '; break }
    case 3: { definisiBulan = ' Maret '; break }
    case 4: { definisiBulan = ' April '; break }
    case 5: { definisiBulan = ' Mei '; break }
    case 6: { definisiBulan = ' Juni '; break }
    case 7: { definisiBulan = ' Juli '; break; }
    case 8: { definisiBulan = ' Agustus '; break }
    case 9: { definisiBulan = ' September '; break }
    case 10: { definisiBulan = ' Oktober '; break }
    case 11: { definisiBulan = ' November '; break }
    case 12: { definisiBulan = ' Desember '; break }
}

console.log(tanggal + definisiBulan + tahun)

// soal 3

for (var baris = "#"; baris.length < 8; baris += "#") {
    console.log(baris);
}

// soal 4

var m = 10;
var i = 1;
while (m >= 1) {
    if (i % 3 == 0) {
        console.log(i + (" - I Love VueJS"))
        console.log("===")
    }
    else if (i % 2 == 1) {
        console.log(i + (" - I Love Programming"))
    }
    else {
        console.log(i + (" - I Love Javascript"))
    }
    i++;
    m--;
}


