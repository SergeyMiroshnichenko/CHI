import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myfakeapi.com/api/',
  });
  export const getCars = () => {
 
    return (
        instance.get("cars")
        
        .then(response => { return response.data})
        
    )
  }