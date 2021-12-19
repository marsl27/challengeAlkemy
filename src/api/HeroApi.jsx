import axios from 'axios';

const mainURL = 'https://superheroapi.com/api/';
const token = '10227290079499431';

const heroApi = (() => {
  const getHeroById = heroId => new Promise((resolve, reject) => {
    axios
      .get(`https://private-cors-server.herokuapp.com/${mainURL + token}/${heroId}`)
      .then(data => {
        resolve(data.data);
        reject(new Error('something bad happened'));
      });
  });

  const getHeroBySearch = search => new Promise((resolve, reject) => {
    axios
      .get(`https://private-cors-server.herokuapp.com/${mainURL + token}/search/${search}`)
      .then(data => {
        resolve(data.data);
        reject(new Error('something bad happened'));
      });
  });

  const getHeroByName = name => new Promise((resolve, reject) => {
    axios
      .get(
        `https://private-cors-server.herokuapp.com/${
          mainURL + token
        }/search/${name}`,
      )
      .then(data => {
        resolve(data.data.results);
        reject(new Error('something bad happened'));
      });
  });

  return {
    getHeroByName,
    getHeroBySearch,
    getHeroById,
  };
})();

export default heroApi;