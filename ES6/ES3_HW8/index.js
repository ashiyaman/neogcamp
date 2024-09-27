//Function to display Weather
const displayWeather = (city, weather) =>
    `The weather in ${city} is ${weather} degree Celcius.`;
  console.log(displayWeather('New York', 20));
  console.log(displayWeather('London', 15));
  
  //Function to format Currency
  const formatCurrency = (amount, code) => `You have ${amount} ${code}.`;
  console.log(formatCurrency(50.5, 'USD'));
  console.log(formatCurrency(100, 'EUR'));
  
  //Function to display Book Summary
  const displayBookSummary = (title, author, genre) =>
    `The book "${title}" written by ${author} belongs to the ${genre} genre.`;
  console.log(
    displayBookSummary('To Kill a Mockingbird', 'Harper Lee', 'Fiction')
  );
  
  //Function to display MovieInfo
  const displayMovieInfo = (movieName, releaseYear, director) =>
    `The movie "${movieName}" was released in ${releaseYear} and directed by ${director}.`;
  console.log(displayMovieInfo('Inception', 2010, 'Christopher Nolan'));
  
  //Function to construct Email
  const constructEmail = (email, subject) => `
  To: ${email}
  Subject: ${subject}
  
  Dear ${email},
  
  ...
  `;
  console.log(constructEmail('alice@example.com', 'Meeting Reminder'));
  
  //Function that uses template literals and ternary operator to display a message.
  const assessGrade = (grade) =>
    `You are ${grade >= 50 ? 'passing.' : 'failing.'}`;
  console.log(assessGrade(75));
  console.log(assessGrade(60));
  console.log(assessGrade(45));
  
  //Function that uses template literals and ternary operator to concatenate strings with numeric values.
  const showMessage = (item, quantity) =>
    `You have ${quantity} ${item}${quantity > 1 ? 's.' : '.'}`;
  console.log(showMessage('bangle', 10));
  console.log(showMessage('lipstick', 1));
  
  //Function that uses template literals and ternary operator to display a message based on a condition.
  const assessMarks = (marks, grade) =>
    `You are ${marks > 60 && grade === 'A' ? 'passing.' : 'failing.'}`;
  console.log(assessMarks(95, 'A'));
  console.log(assessMarks(62, 'C'));
  console.log(assessMarks(45, 'D'));
  
  //Function to show proper message.
  const showMsg = (item1, quantity1, item2, quantity2) =>
    `You ${
      quantity1 > 10 && quantity2 > 5
        ? 'have a good collection.'
        : 'need to update your collection.'
    }`;
  console.log(showMsg('bangle', 11, 'lipstick', 6));
  console.log(showMsg('bangle', 5, 'lipstick', 1));
  console.log(showMsg('bangle', 12, 'lipstick', 4));
  
  //Function to show proper message.
  const shareStationeryMessage = (pencils, erasers) =>
    `Please ${
      (pencils > 10 && erasers > 5) || (pencils > 5 && erasers > 10)
        ? 'share stationery with friends.'
        : 'ask your friends for stationery.'
    }`;
  console.log(shareStationeryMessage(12, 8));
  console.log(shareStationeryMessage(7, 15));
  console.log(shareStationeryMessage(5, 3));
  