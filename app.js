console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/* 
// Reduce Method

const numbers = [2, 22, 12, 17, 18, 39, 129]
const Sum = numbers.reduce((p, c) => {
    console.log(`Previous Value: ${p}`)
    console.log(`Current Value: ${c}`)
        return p + c;
}, 0);

    console.log(Sum);

// forEach Method
function arraySum(numbers) {
    let sum = 0
    numbers.forEach((number) => {
        sum += number;
    });
    return sum
}

console.log(arraySum(numbers))


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "The Wild Robot";
book.author = "Peter Brown";
book.pages = 230;
book.readCount = 2;

console.log(book)

book.info = function () {
    return `${book.title} by ${book.author}, ${book.pages} pages, read ${book.readCount} times.`
}

console.log(book.info())


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
const revSentence = sentence.split(" ")

let answer = []

for (let i = 0; i < revSentence.length; i++) {
   answer.push(revSentence[i].split("").reverse().join(""))
}

let joinAnswer = answer.join(" ")

console.log(joinAnswer) */


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

/*

6. And create an object for each row (or table record)
7. Assign the values from the parsed row values to `name` and `age` values on the object
8. Add each new object to a result array (should be defined before the loop block */

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";


const data = csvData.split("\n")
const dataHeadings = data[0].split(",") // ["name", "age"]
const dataBody = data.slice(1,5)// ["Frodo, 50 \n Sam, 38 \n Merry, 36 \n, Pippin, 26"]

console.log(dataHeadings)
for (let n = 0; n < dataBody.length; n++) {
    dataBody[n].split(",")
    
}
console.log(dataBody)

//const sortedData = Object.fromEntries(dataBody)
//console.log(sortedData)





