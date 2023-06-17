// ARREY

/*
2-masala
arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
Input: [4, 5, 7, 8, 6, 9]
Output: [6, 8, 4]

*/

/*
let arr = [4, 5, 7, 8, 6, 9]
let newson = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newson.push(arr[i]);
    }
}
console.log(newson.reverse())
*/


/*
3-masala
n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
Input:  [4, 5, 7, 8, 6, 9]
Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4
*/

/*
const arr = [4, 5, 7, 8, 6, 9]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[arr.length - (i + 1)]);
}
*/



// UYGA VAZIFA

// Kvadratning tomoni a berilgan. Uning perimetri P aniqlansin.
// P = 4 * a.

/*
let kvadrat = prompt("Kvadratning tomonini kiriting")
const peri = 4
function perimetr() {
    let perimetri = peri * kvadrat
    alert(perimetri)
}
perimetr()
*/




// Kvadratning tomoni a berilgan. Uning yuzasi S aniqlansin.
// S = a^2
/*
let a = prompt("Kvadratning tomonini kiriting")

function yuza() {
    let yuzi = a * a
    alert(yuzi)
}
yuza()
*/



// Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
// L= 2 * π * R, S = π * R^2

/*
let r = prompt("Doiraning radiusini kiriting")

function uzunligi() {
    let doiraL = Math.round(2 * Math.PI * r)
    let doiraS = Math.round(Math.PI * r * r)
    alert(`Doiraning uzunligi ${doiraL},
    Doiraning yuzasi ${doiraS}`)
}
uzunligi()
*/



// Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin. G G = a * b

/*
let a = prompt("Birinchi son a ni kiriting")
let b = prompt("Ikkinchi son b ni kiriting")

function geometrigi() {
    if (a > 0) {
        if (b > 0) {
            ortageometrigi = a * b
            alert(ortageometrigi)
        } else if (b < 0) {
            musbatb = b * (-1)
            ortageometrigi = a * musbatb
            alert(ortageometrigi)
        }
    } else if (a < 0) {
        musbata = a * (-1)
        if (b > 0) {
            ortageometrigi = musbata * b
            alert(ortageometrigi)
        } else if (b < 0) {
            musbatb = b * (-1)
            ortageometrigi = musbata * musbatb
            alert(ortageometrigi)
        }
    }
}
geometrigi()
*/




// x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
// y = 3 * x^6 - 6 * x^2 - 7

/*
let x = prompt("x ning qiymatini kiriting")

function yningqiymati() {
    let y = 3 * (x*x*x*x*x*x) - 6 * (x*x) - 7
    alert(y)
}
yningqiymati()
*/



// X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.

/*
function programma(kg, som) {
    alert(`${kg} kg konfet ${som} so'm turadi`)
}
programma(1, 1000)
*/



// To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// S = a * b va P = 2 * (a + b)

/*
let a = prompt("To'g'ri to'rtburchakning a tomonini kiriting")
let b = prompt("To'g'ri to'rtburchakning b tomonini kiriting")

function yuz() {
    let s = a * b
    let p = 2 * (a + b)
    alert(`To'g'ri to'rtburchakning yuzi ${s},
    To'g'ri to'rtburchakning perimetri ${p}`)
}
yuz()
*/



// Aylananing diametri d berilgan. Uning uzunligi aniqlansin. 
// L = π * d, π = 3.14

/*
let d = prompt("Aylananing diametrini kiriting")

function uzun() {
    let l = Math.round(Math.PI * d)
    alert(`Aylananing uzunligi ${l}`)
}
uzun()
*/



// Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

/*
let A = prompt("Sonni kiriting")

if (A > 0) {
    let musbat = A * 1 + 1
    alert(musbat)
} else if (A < 0) {
    let manfiy = A * 1 - 2
    let manfiy2 = A * 1 - (-2)
    alert(`${manfiy}, yoki ${manfiy2}`)
}
*/


// k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

/*
let k = prompt("K ning qiymatini kiriting")
let n = prompt("n ning qiymatini kiriting")

for (let i = 0; i < n; i++) {
    console.log(k);
}
*/