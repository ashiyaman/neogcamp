const restExample = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
  };
  restExample(1, 2, 3, 4, 5, 6);
  
  const concatenateStrings = (...rest) => rest.join(' ');
  console.log('Hello', 'World');
  console.log('JS', 'is', 'fun');
  
  const countArguments = (...args) => args.length;
  console.log(countArguments(1, 2, 3, 4));
  console.log(countArguments('JS', 'is', 'fun'));
  