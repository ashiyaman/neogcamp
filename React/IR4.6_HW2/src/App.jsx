import { useState } from 'react';

const ClothingSize = () => {
  const [selectedSize, setSelectedSize] = useState();
  const clothingDetails = [
    {
      size: 'Small',
      description: 'Fits chest size 34-36 inches',
    },
    {
      size: 'Medium',
      description: 'Fits chest size 38-40 inches',
    },
    {
      size: 'Large',
      description: 'Fits chest size 42-44 inches',
    },
  ];

  const clothingSizeHandler = (event) => {
    const value = event.target.value;
    setSelectedSize(
      clothingDetails.find((clothingDetail) => clothingDetail.size === value)
    );
  };

  return (
    <>
      <label>Select a clothing size: </label>
      <select onChange={clothingSizeHandler}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <p>
        Description:{' '}
        {selectedSize && `${selectedSize.size} - ${selectedSize.description}`}
      </p>
    </>
  );
};

const JobType = () => {
  const [jobType, setJobType] = useState();
  const jobDetails = [
    {
      name: 'Full-time',
      description: 'Employment for a standard 40-hour work week',
    },
    {
      name: 'Part-time',
      description: 'Employment for less than a standard work week',
    },
    {
      name: 'Contract',
      description: 'Temporary employment for a specific project or period',
    },
  ];

  const jobTypeHandler = (event) => {
    const value = event.target.value;
    setJobType(jobDetails.find((jobDetail) => jobDetail.name === value));
  };

  return (
    <>
      <label>Select a job type: </label>
      <select onChange={jobTypeHandler}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>
      <p>
        Description: {jobType && `${jobType.name} - ${jobType.description}`}
      </p>
    </>
  );
};

const MealTime = () => {
  const [meal, setMeal] = useState();
  const mealDetails = [
    {
      name: 'Breakfast',
      description: 'Morning meal typically eaten before starting the day',
    },
    {
      name: 'Lunch',
      description: 'Midday meal typically eaten around noon',
    },
    {
      name: 'Dinner',
      description: 'Evening meal typically eaten at the end of the day',
    },
  ];

  const mealHandler = (event) => {
    const value = event.target.value;
    setMeal(mealDetails.find((mealDetail) => mealDetail.name === value));
  };

  return (
    <>
      <label>Select a meal time: </label>
      <select onChange={mealHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <p>Description: {meal && `${meal.name} - ${meal.description}`}</p>
    </>
  );
};

const SkillLevel = () => {
  const [skill, setSkill] = useState();
  const skillDetails = [
    {
      name: 'Beginner',
      description: 'Just starting out, limited knowledge or experience',
    },
    {
      name: 'Intermediate',
      description: 'Some experience or knowledge, moderate skill level',
    },
    {
      name: 'Advanced',
      description: 'Extensive knowledge or experience, high skill level',
    },
  ];

  const skillHandler = (event) => {
    const value = event.target.value;
    setSkill(skillDetails.find((skillDetail) => skillDetail.name === value));
  };

  return (
    <>
      <label>Select your skill level: </label>
      <select onChange={skillHandler}>
        {skillDetails.map((skillDetail) => (
          <option value={skillDetail.name}>{skillDetail.name}</option>
        ))}
      </select>
      <p>Description: {skill && `${skill.name} - ${skill.description}`}</p>
    </>
  );
};

const TemperatureUnit = () => {
  const [temperature, setTemperature] = useState();
  const tempDetails = [
    {
      name: 'Celcius',
      description: 'Temperature scale in which water freezes at 0 degrees ',
    },
    {
      name: 'Farenheit',
      description: 'Temperature scale widely used in the United States',
    },
    {
      name: 'Kelvin',
      description:
        'Absolute temperatue scale with 0 representing absolute zero',
    },
  ];

  const temperatureHandler = (event) => {
    const value = event.target.value;
    setTemperature(tempDetails.find((tempDetail) => tempDetail.name === value));
  };

  return (
    <>
      <label>Select a temperature unit: </label>
      <select onChange={temperatureHandler}>
        {tempDetails.map((tempDetail) => (
          <option value={tempDetail.name}>{tempDetail.name}</option>
        ))}
      </select>
      <p>
        Description:{' '}
        {temperature && `${temperature.name} - ${temperature.description}`}
      </p>
    </>
  );
};

export default function App() {
  return (
    <main>
      <ClothingSize />
      <br />
      <JobType />
      <br />
      <MealTime />
      <br />
      <SkillLevel />
      <br />
      <TemperatureUnit />
    </main>
  );
}
