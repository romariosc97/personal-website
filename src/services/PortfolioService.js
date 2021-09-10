import axios from 'axios';

function getPortfolio(){
    return axios.get(`${process.env.REACT_APP_API_URL}api/portfolio`);
}

function getPortfolioById(id){
    return axios.get(`${process.env.REACT_APP_API_URL}api/portfolio/${id}`);
}

function getPortfolioByIdImages(id){
    return axios.get(`${process.env.REACT_APP_API_URL}api/portfolio/${id}/images`);
}

const PortfolioService = {
    getPortfolio,
    getPortfolioById,
    getPortfolioByIdImages
};

export default PortfolioService;