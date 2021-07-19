import axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

export const isValidLogin = (login) =>
  axios.post(url, login)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
