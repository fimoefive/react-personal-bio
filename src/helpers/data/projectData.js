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

const deleteProject = (firebaseKey, admin) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects(admin).then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

const updateProject = (project, admin) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/projects/${project.firebaseKey}.json`, project)
    .then(() => getProjects(admin).then(resolve))
    .catch((error) => reject(error));
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getProjects, addProject,
  deleteProject, updateProject,
  getSingleProject
};
