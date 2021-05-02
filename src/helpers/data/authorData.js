import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addAuthor = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/authors.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((authorsArray) => resolve(authorsArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((authorsArray) => resolve(authorsArray)))
    .catch((error) => reject(error));
});

const updateAuthor = (author) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/authors/${author.firebaseKey}.json`, author)
    .then(() => getAuthors().then(resolve))
    .catch((error) => reject(error));
});

export {
  addAuthor, getAuthors, deleteAuthor, updateAuthor
};
