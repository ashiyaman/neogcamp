//Reverse String
const strings = ['hello', 'world', 'javascript', 'openai', 'language'];
const reverseString = strings.map((str) => str.split('').reverse().join(''));
console.log('Reversed String: ', reverseString);

//Add ! at the end
const phrases = ['hello', 'how are you', 'good morning', 'have a nice day'];
const addToPhrases = phrases.map((phrase) => `${phrase}!`);
console.log('Added ! to phreses:', addToPhrases);

//Convert price to array
const shoppingCart = {
  apple: 25,
  banana: 18,
  orange: 32,
};
const prices = [];
for (const arr in shoppingCart) {
  prices.push(`Rs. ${shoppingCart[arr]}`);
}
console.log('Price in shopping cart:', prices);

//Extract ID
const products = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Phone' },
  { id: 103, name: 'Tablet' },
];
const extractID = products.map((product) => product.id);
console.log('Products with ID:', extractID);

//Filter freezing temperatures
const temperatures = [-5, 10, -2, 15, -10, 5];
const filteredTemp = temperatures.filter((temperature) => temperature < 0);
console.log('Filtered freezing temperatures: ', filteredTemp);

//Filter task which are high priority
const tasks = [
  { id: 1, title: 'Task 1', priority: 'high' },
  { id: 2, title: 'Task 2', priority: 'medium' },
  { id: 3, title: 'Task 3', priority: 'low' },
  { id: 4, title: 'Task 4', priority: 'high' },
];
const highPrioritytasks = tasks.filter((task) => task.priority === 'high');
console.log('High priority tasks: ', highPrioritytasks);

//Extract sentences containing word 'Javascript'
const sentences = [
  'JavaScript is a programming language.',
  'Python is also a programming language.',
  'JavaScript frameworks are popular.',
  'I love to learn new programming languages.',
];
const filteredSentences = sentences.filter((sentence) =>
  sentence.includes('JavaScript')
);
console.log('Sentences with word Javascript:', filteredSentences);

//Filter students with GPA 2.9
const students = [
  { name: 'Alice', GPA: 3.5 },
  { name: 'Bob', GPA: 2.8 },
  { name: 'Charlie', GPA: 3.2 },
  { name: 'David', GPA: 2.9 },
];
const filteredStudentsWithGPA = students.filter((student) => student.GPA > 2.9);
console.log('Filter students with GPA more than 2.9:', filteredStudentsWithGPA);

//Find longest word
const words = ['apple', 'banana', 'kiwi', 'lime', 'grape'];
const longestWord = words.reduce((acc, curr) => {
  acc = acc.length > curr.length ? acc : curr;
  return acc;
}, words[0]);
console.log('Longest word:', longestWord);

//Find highest value
const num = [10, 25, 8, 30, 15];
const highestNum = num.reduce((acc, curr) => {
  acc = acc > curr ? acc : curr;
  return acc;
}, num[0]);
console.log('Highest Number:', highestNum);

//Convert to single object
const countries = [
  { country: 'USA', capital: 'Washington, D.C.' },
  { country: 'France', capital: 'Paris' },
  { country: 'Japan', capital: 'Tokyo' },
];
const countryObj = {};
const updatedCountries = countries.map((countryData) => {
  countryObj[countryData.country] = countryData.capital;
});
console.log('Updated Countries: ', countryObj);

//Filter books written by authors whose names start with 'A’.
const books = [
  { title: 'Book 1', author: 'Alice' },
  { title: 'Book 2', author: 'Bob' },
  { title: 'Book 3', author: 'Charlie' },
  { title: 'Book 4', author: 'Anna' },
];

const filteredBooks = books.filter((book) => book.author.slice(0, 1) === 'A');
console.log(
  "Books written by authors whose names start with 'A’:",
  filteredBooks
);

//Filter only palindromes
const wordsFilter = ['level', 'apple', 'radar', 'banana', 'civic'];

const filterPalindrome = wordsFilter.filter(
  (word) => word === word.split('').reverse().join('')
);

console.log('Filter Palindrome:', filterPalindrome);
