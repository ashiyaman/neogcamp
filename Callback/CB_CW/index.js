//Callback is when a function is passed as argument to another function to be executed at a later stage

/*function greetUser(name, callback) {
  //we are not using callback(), since it would execute immediately
  const message = `Hello ${name}`;

  callback(message);
}

function logMessage(message) {
  console.log(message);
}

greetUser('Ashiya', logMessage); //we are not using logMessage(), since it would execute immediately*/

const greetUser = (name, callback) => {
    let message = `Good Morning, ${name}`;
    callback(message);
  };
  
  const logMessage = (message) => {
    console.log(message);
  };
  
  greetUser('Ashiya', logMessage);
  
  /* btn.addEventListener("click", function(){ -> this is callback function
  }) */
  