import axios from 'axios';

// URL for axios call
export default axios.create({
    baseURL: 'http://localhost:3001'
});