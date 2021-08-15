const formatDate = (date) => {
    let arrayTmp, dateTmp, monthTmp, yearTmp;
    arrayTmp = date.split('T');
    dateTmp = arrayTmp[0].split('-')
    yearTmp = dateTmp[0];
    monthTmp = dateTmp[1];
    return `${monthTmp}/${yearTmp}`
};

const Dates = {
    formatDate
};

export default Dates;