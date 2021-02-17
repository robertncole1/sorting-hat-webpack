const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortingHat2 = houses[Math.floor(Math.random() * houses.length)];
  return sortingHat2;
};

export default sortingHat;
