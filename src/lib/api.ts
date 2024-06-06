import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export async function getRegions() {
  const { data } = await axios.get('/regions')
  return data
}

export async function getComp(reg: string) {
  const { data } = await axios.get(`/compagnies/${reg}`)
  return data
}
export async function getBrigads(com: string) {
  const { data } = await axios.get(`/brigads/${com}`)
  return data
}

export default axios