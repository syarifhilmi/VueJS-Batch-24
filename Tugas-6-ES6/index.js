// soal 1

const luas_persegi_panjang = (panjang, lebar) => panjang * lebar
p = 5
l = 3
console.log(luas_persegi_panjang(p, l))

// soal 2

const newFunction = (firstName, lastName) => {
    return {
        fullName: () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

// soal 3

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const { firstName, lastName, address, hobby } = newObject
// Driver code
console.log(firstName, lastName, address, hobby)

// soal 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

// soal 5

const planet = "earth"
const view = "glass"
let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`

console.log(before)
