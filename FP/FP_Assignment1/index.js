//Use .map() to subtract the square of each number from that number
const numsArray = [10, 5, 8, 4, 6];
const subtractSquareFromNum = numsArray.map((num) => num - num ** 2);
console.log('Subtract square from num:', subtractSquareFromNum);

//Use .map() to double the negative numbers and then subtract it from the original number
const numbsArray = [3, -2, -5, 12, 8, -4, 7];
const subtractDoubleFromNum = numbsArray.map((num) =>
  num < 0 ? num - num * 2 : num
);
console.log('Subtract doubled number from number:', subtractDoubleFromNum);

//Use .map() to create an array with each sentence followed by the count of words in it
const sentencesArray = [
  'JavaScript is a powerful programming language.',
  'Web development involves frontend and backend technologies.',
  'Coding is a skill that can be learned and mastered over time.',
];
const numOfWords = sentencesArray.map((sentence) => {
  let wordCount = 0;
  wordCount = sentence.split(' ').length;
  return `${sentence}${wordCount}`;
});
console.log('Sentence:', numOfWords);

//Extract the brands using .map()
const cars = [
  { brand: 'Toyota', model: 'Camry' },
  { brand: 'Honda', model: 'Accord' },
  { brand: 'Ford', model: 'Mustang' },
];
const brands = cars.map((car) => car.brand);
console.log(brands);

//Extract the genres using .map()
const movies = [
  { title: 'Inception', genre: 'Sci-Fi' },
  { title: 'The Shawshank Redemption', genre: 'Drama' },
  { title: 'The Dark Knight', genre: 'Action' },
];

//Increase the dimensions by 10% using .map()
const furnitures = [
  { type: 'Sofa', width: 200, height: 80 },
  { type: 'Table', width: 120, height: 60 },
  { type: 'Chair', width: 50, height: 45 },
];
const increaseDimension = furnitures.map((furniture) => ({
  ...furniture,
  width: furniture.width + furniture.width * 0.1,
  height: furniture.height + furniture.height * 0.1,
}));
console.log(increaseDimension);

//Add a new property indicating whether the product is affordable (price less than or equal to 100) or not using .map()
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Headphones', price: 50 },
  { name: 'Camera', price: 300 },
];
const isProductAffordable = products.map((product) => ({
  ...product,
  affordable: product.price <= 100 ? true : false,
}));
console.log('Is product affordable?', isProductAffordable);

//Filter the even negative numbers into a new array using .filter()
const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];
const filterNegativeNums = numbers.filter((num) => num < 0);
console.log('Negative Numbers:', filterNegativeNums);

//Filter the students who scored more than 70 in their exams, are active participants, and belong to either the "Math" or "Science" club
const students = [
  { name: 'Alice', score: 85, activeParticipant: true, club: 'Math' },
  { name: 'Bob', score: 55, activeParticipant: false, club: 'History' },
  { name: 'Charlie', score: 75, activeParticipant: true, club: 'Science' },
];
const filterStudents = students.filter(
  (student) =>
    student.activeParticipant &&
    student.score > 70 &&
    (student.club === 'Math' || student.club === 'Science')
);
console.log('Filtered Students:', filterStudents);

//Filter the words that contain the letter 'a' and have more than 5 characters into a new array
const words = [
  'apple',
  'banana',
  'kiwi',
  'grape',
  'pear',
  'orange',
  'strawberry',
];
const filterWords = words.filter(
  (word) => word.length > 5 && word.includes('a')
);
console.log('Filtered Words:', filterWords);
