import axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = (transfer) =>
  axios.post(url, transfer)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
