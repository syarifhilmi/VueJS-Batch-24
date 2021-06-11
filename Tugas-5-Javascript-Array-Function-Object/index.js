// soal 1

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort()
console.log(daftarHewan)

// soal 2

function introduce(data) {
    name = data.name
    age = data.age
    address = data.address
    hobby = data.hobby
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby
}

var data = { name: "John", age: 30, address: "Jalan Pelesiran", hobby: "Gaming" }

var perkenalan = introduce(data)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming" 

// soal 3
// sebenernya ada yang lebih pendek lagi mas, pake regex, cuman karena saya liat di sini lagi bahas array, saya coba jawabnya kaya gini
console.log()
function hitung_huruf_vokal(data) {
    kata = data.toLowerCase()
    jumlah_huruf = kata.length
    vowels_count = []
    for (var i = 0; i < jumlah_huruf; i++) {
        if (kata[i] == 'a' || kata[i] == 'i' || kata[i] == 'u' || kata[i] == "e" || kata[i] == 'o') {
            vowels_count.push(kata[i])
        }
    }
    return vowels_count.length
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1, hitung_2) // 3 2

//soal 4
console.log()
function hitung(angka) {
    return (2 * angka) - 2
}

console.log(hitung(0)) // -2
console.log(hitung(1)) // 0
console.log(hitung(2)) // 2
console.log(hitung(3)) // 4
console.log(hitung(5)) // 8