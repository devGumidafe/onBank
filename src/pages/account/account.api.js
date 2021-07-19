import axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const insertAccount = (account) =>
  axios.post(`${url}/${account.id}`, account)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })


export const getAccount = (id) =>
  axios.get(`${url}/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })

export const updateAccount = (account) =>
  axios.put(`${url}/${account.id}`, account)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })

