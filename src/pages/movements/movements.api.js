import axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementList = () =>
  axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })

export const getMovementListById = (accountId) =>
  axios.get(url, { params: { accountId } })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
