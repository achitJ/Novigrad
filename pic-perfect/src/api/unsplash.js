import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8HJ1mcu79_UjEtu5bf8E-7lxAc2Tr_05gqzgG3psUUc'
    },
});