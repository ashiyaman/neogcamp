//Transform the given array of objects into an object
const productInfo = [
    { key: 'name', value: 'Laptop' },
    { key: 'price', value: 12000 },
    { key: 'brand', value: 'Dell' },
  ];
  const product = productInfo.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  console.log('Product:', product);
  
  //Convert the given array of objects into an array of universities
  const colleges = [
    { item: 'Book', university: 'Harvard' },
    { item: 'Book', university: 'MIT' },
    { item: 'Book', university: 'Stanford' },
  ];
  const universities = colleges.reduce(
    (acc, curr) => acc.concat(curr.university),
    []
  );
  console.log('Universities:', universities);
  
  //Transform the given array of objects into an object
  const userPreferences = [
    { key: 'theme', value: 'Dark Mode' },
    { key: 'fontSize', value: 16 },
    { key: 'notifications', value: true },
  ];
  const user = userPreferences.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  console.log('User Preference:', user);
  
  //Transform the given array of objects into an object
  const continents = [
    { key: 'Asia', country: 'India' },
    { key: 'Europe', country: 'France' },
    { key: 'North America', country: 'USA' },
  ];
  const countryWithContinent = continents.reduce((acc, curr) => {
    acc[curr.key] = curr.country;
    return acc;
  }, {});
  console.log('Country With Continent:', countryWithContinent);
  
  //Transform the given array of objects into an object
  const information = [
    { key: 'city', value: 'New York' },
    { key: 'population', value: 8398748 },
    { key: 'area', value: 468.9 },
  ];
  const city = information.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  console.log('City:', city);
  