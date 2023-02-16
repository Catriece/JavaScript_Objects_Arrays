console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

function arraySum() {
    numbers.forEach((number) => {
        sum += number;
    })
    return sum
    }
console.log(arraySum(numbers));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}

book.title = "The Wild Robot";
book.author = "Peter Brown";
book.pageCount = 230;
book.readCount = 2;

book.info = function() {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, read ${this.readCount} times.`
}

console.log(book.info());

// Exercise 3 Section - Followed The Video
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
function reverseWords(sentence) {
    let result = []
    let newSentence = sentence.split(" ")
    for (let i = 0; i < newSentence.length; i++) {
        let letters = newSentence[i].split("")
        let newWord = letters.reverse()
        let reverseWord = letters.join("")
        result.push(reverseWord);
    }
    return result.join(" ");
}


console.log(reverseWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const headers = csvData.split("\n")[0].split(",");
const dataValues = csvData.split("\n").slice(1);
const newArr = []

for (i = 0; i < dataValues.length; i++) {
    let indValues = dataValues[i].split(",");
    let obj ={
        [headers[0]]: indValues[0],
        [headers[1]]: indValues[1],
    };
    newArr.push(obj)
}

console.log(newArr)