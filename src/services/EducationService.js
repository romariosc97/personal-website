import axios from 'axios';

function getEducation(){
    return axios.get(`${process.env.REACT_APP_API_URL}api/education`);
}

const EducationService = {
    getEducation
};

export default EducationService;