import dotenv from 'dotenv';

dotenv.config();

function fetchRequest (path:string, options?:any) {
  return fetch(process.env.REACT_APP_BASE_URL + path, options)
    .then(result => result.status < 400 ? result : Promise.reject())
    .then(result => result.status === 204 ? result : result.json())
    .catch(error => {
      console.error('Error: ', error);
    })
}

const ApiService = {
  fetchRequest
}

export default ApiService;