import axios from 'axios';

function getExperience(){
    return axios.get(`http://localhost:8000/api/experience`);
}

const ExperienceService = {
    getExperience
};

export default ExperienceService;