import axios from 'axios';
import axiosRetry from 'axios-retry';

const teste = () => {
  alert('coelho');
}

const getCompleteDataFromApi = (callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get('https://bdv.glitch.me/api/wines/get-full-list?fulllist=Enviar')
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      //   setIsLoading(false); //  VER ---------------------------------------<
      console.log(error, 'error');
      //callback(response.data); p mandar o erro po render?
    })
}


const getDataNameFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get('https://bdv.glitch.me/api/wines/find-a-wine/?wname=' + enteredInput)
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      //  setIsLoading(false); // igual situação
      console.log(error, 'error');
    })
}


//por produtor  

const getDataProducerFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get('https://bdv.glitch.me/api/wines/list-by-producer/?prod=' + enteredInput)
    .then(response => {
      console.log(response.data);
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      //  setIsLoading(false); // igual
      console.log(error, 'error');
    })
}


const getDataQualityFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get('https://bdv.glitch.me/api/wines/list-by-type-of-wine/?qual=' + enteredInput)
    .then(response => {
      if (callback) {
        callback(response.data)
      }
    })
    .catch(error => {
      //  setIsLoading(false); //same here
      console.log(error, 'error');
    })

}

const functions = {
  getCompleteDataFromApi: getCompleteDataFromApi,
  getDataNameFromApi: getDataNameFromApi,
  getDataProducerFromApi: getDataProducerFromApi,
  getDataQualityFromApi: getDataQualityFromApi,
  teste: teste,
}

export default functions;