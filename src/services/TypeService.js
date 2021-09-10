import axios from 'axios';

function getTypes(){
    return axios.get(`${process.env.REACT_APP_API_URL}api/type`);
}

const TypeService = {
    getTypes
}

export default TypeService;