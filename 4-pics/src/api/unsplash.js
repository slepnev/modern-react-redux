import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6638b482cea417aafb6a3941e63fb57a5ad5d0a9f88e19579985c0436140929c'
  }
});