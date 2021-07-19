import axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

export const getAccount = (id) =>
  axios.get(`${url}/account/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })

export const getAccountList = () =>
  axios.get(`${url}/account-list`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
