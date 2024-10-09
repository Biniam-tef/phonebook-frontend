import axios from 'axios'
const baseUrl = '/api/persons'

function getData() {
  const request = axios.get(`${baseUrl}`)
  return request.then(res => res.data)
}

function createData(newObject) {
  const request = axios.post(`${baseUrl}`, newObject)
  return request.then(res => res.data)
}

const update = (id, newObject) => {
  const request =  axios.put(`${baseUrl}/${id}`, newObject)
  console.log('PUT', request)
  return request.then(response => {
    console.log('RESPONSE DATA', response.data)
    return response.data
  })
}

export default {getData, createData, update}