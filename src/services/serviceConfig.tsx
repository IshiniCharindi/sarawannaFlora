import axios from 'axios'


const localDomain = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})


const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}


const fileUploadHeaders = {
    headers: {
  
        'Accept': 'application/json',
    }
}



const domain = localDomain

export default domain
export {
    headers,
    fileUploadHeaders
}