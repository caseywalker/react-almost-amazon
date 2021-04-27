import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const addAuthor = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/authors.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/authors/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Author added', object)));
    })
    .catch((error) => reject(error));
});

export default addAuthor;
