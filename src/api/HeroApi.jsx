import axios from 'axios';

const mainURL = 'https://superheroapi.com/api.php/';
const token = '10227290079499431';

const heroApi = (() => {
  const getHeroById = heroId => new Promise((resolve, reject) => {
    axios
      //.get(`https://private-cors-server.herokuapp.com/${mainURL + token}/${heroId}`)
      .get(`${mainURL + token}/${heroId}`)
      .then(data => {
        resolve(data.data);
        reject(new Error('something bad happened'));
      });
  });

  const getHeroByName= search => new Promise((resolve, reject) => {
    axios
      .get(`${mainURL + token}/search/${search}`)
      .then(data => {
        resolve(data.data);
        reject(new Error('something bad happened'));
      });
  });

  return {
    getHeroByName,
    getHeroById,
  };
})();

export default heroApi;