const readBooks = require('./callback.js')
const books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini
let waktu = 10000
const getPosts = (waktu) => {
    setTimeout(() => {
        readBooks(waktu, books[1], getPosts1)
    }, books[1].timeSpent)
}
const getPosts1 = (waktu) => {
    setTimeout(() => {
        readBooks(waktu, books[2], getPosts2)
    }, books[2].timeSpent)
}
const getPosts2 = (waktu) => {
    setTimeout(() => {
        readBooks(waktu, books[3], getPost)
    }, books[3].timeSpent)
}
const getPost = () => {
    setTimeout(() => {
        books.forEach(books => {
            console.log(books)
        })
    }, 1000)
}

readBooks(waktu, books[0], getPosts)
