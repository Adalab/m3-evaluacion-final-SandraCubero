const apiUrl = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

const getDataFromServer = () => {
  return fetch(apiUrl)
    .then(response => response.json());
};

export default getDataFromServer;