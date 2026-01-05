import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000';

const api=axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const sendMessage=async(message)=>{
  try {
    console.log('Sending message:', message)
    const response = await api.post('/chat',{
      messages: message
    })
    return response.data
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}
