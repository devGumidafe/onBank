import axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = () =>
  axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
