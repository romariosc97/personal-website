import axios from 'axios';

function getCertifications(){
    return axios.get(`${process.env.REACT_APP_API_URL}api/certification`);
}

const CertificationService = {
    getCertifications
};

export default CertificationService;