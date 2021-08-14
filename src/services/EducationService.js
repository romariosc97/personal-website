import axios from 'axios';

function getEducation(){
    return axios.get(`http://localhost:8000/api/education`);
}

const EducationService = {
    getEducation
};

export default EducationService;