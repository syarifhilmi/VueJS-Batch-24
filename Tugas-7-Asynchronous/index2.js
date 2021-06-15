const readBooksPromise = require('./promise.js')
const books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 
let waktu = 10000
const getPosts = (waktu) => {
    setTimeout(() => {
        readBooksPromise(waktu, books[1])
            .then(getPosts1)
            .catch(error => console.log(error))
    }, books[1].timeSpent)
}
const getPosts1 = (waktu) => {
    setTimeout(() => {
        readBooksPromise(waktu, books[2])
            .then(getPost)
            .catch(error => console.log(error))
    }, books[2].timeSpent)
}
const getPost = () => {
    setTimeout(() => {
        books.forEach(books => {
            console.log(books)
        })
    }, 1000)
}


readBooksPromise(waktu, books[0])
    .then(getPosts)
    .catch(error => console.log(error))

