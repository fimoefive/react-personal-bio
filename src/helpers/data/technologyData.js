import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/technologies.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addTechnology = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/technologies.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/technologies/${response.data.name}.json`, body)
        .then(() => {
          getTechnologies().then((resp) => resolve(resp));
        });
    }).catch((error) => reject(error));
});

const deleteTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/technologies/${firebaseKey}.json`)
    .then(() => getTechnologies().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

const updateTechnology = (project) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/technologies/${project.firebaseKey}.json`, project)
    .then(() => getTechnologies().then(resolve))
    .catch((error) => reject(error));
});

export {
  getTechnologies, addTechnology,
  deleteTechnology, updateTechnology
};
