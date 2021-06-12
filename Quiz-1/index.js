// soal 1
function next_date(tanggal, bulan, tahun) {

    if (tahun % 4 == 0 && bulan == 2 && tanggal == 29) {
        bulan = bulan + 1
        tanggal = 1
    }
    else {
        if (bulan == 2 && tanggal == 28) {
            bulan = bulan + 1
            tanggal = 1
        }
        else if (bulan == 2 && tanggal == 29) {
            console.log("Tidak ada tanggal 29 tersebut pada bulan " + bulan + " di tahun " + tahun)
        }
        else if (tanggal == 31) {
            if (bulan == 1 || bulan == 3 || bulan == 5 || bulan == 7 || bulan == 8 || bulan == 10) {
                tanggal = 1
                bulan = bulan + 1
            }
            else if (bulan == 12 && tanggal == 31) {
                tanggal = 1
                bulan = 1
            }
            else {
                console.log("Tidak ada tanggal 31 tersebut pada bulan " + bulan)
            }
        }
        else if (tanggal == 30) {
            if (bulan == 4 || bulan == 6 || bulan == 9 || bulan == 10) {
                tanggal = 1
                bulan = bulan + 1
            }
            else {
                console.log("Tidak ada tanggal 30 tersebut pada bulan " + bulan)
            }
        }
        else {
            tanggal = tanggal + 1
        }
    }
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

    return console.log(tanggal + definisiBulan + tahun)
}

//contoh 1
var tanggal = 29
var bulan = 2
var tahun = 2020

next_date(tanggal, bulan, tahun) // output : 1 Maret 2020
//contoh 2

var tanggal = 28
var bulan = 2
var tahun = 2021

next_date(tanggal, bulan, tahun) // output : 1 Maret 2021
//contoh 3

var tanggal = 31
var bulan = 12
var tahun = 2020

next_date(tanggal, bulan, tahun) // output : 1 Januari 2021

console.log()

// soal 2
// sebetulnya ada yang pendek pake str.split(), namun saya pikir ini sedang menguji looping, jadi membuat kodingannya seperti ini
function jumlah_kata(kalimat) {
    temp = []
    hasil = []
    panjang = kalimat.length
    for (var i = 0; i < panjang; i++) {
        if (kalimat[i] == " ") {
            if (temp.length > 0) {
                hasil.push(temp)
            }
            temp = []
        }
        else if (i == panjang - 1) {
            temp.push(kalimat[i])
            hasil.push(temp)
            temp = []
        }
        else {
            temp.push(kalimat[i])
        }
    }
    return console.log(hasil.length)
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"


jumlah_kata(kalimat_1) // 6
jumlah_kata(kalimat_2) // 2