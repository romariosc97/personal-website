import axios from 'axios';

function getExperience(){
    return axios.get(`${process.env.REACT_APP_API_URL}api/experience`);
}

const ExperienceService = {
    getExperience
};

export default ExperienceService;