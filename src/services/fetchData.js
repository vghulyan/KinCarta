const URL =
  'https://raw.githubusercontent.com/theappbusiness/engineering-challenge/main/endpoints/v1/caseStudies.json';

const fetchData = async () => {
  const response = await fetch(URL);
  const newData = await response.json();
  return newData;
};

export default fetchData;
