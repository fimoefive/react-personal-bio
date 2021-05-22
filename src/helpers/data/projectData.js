import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addProject = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/projects.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectArray) => resolve(projectArray));
        });
    }).catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/students/${firebaseKey}.json`)
    .then(() => getProjects().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

export { getProjects, addProject };
