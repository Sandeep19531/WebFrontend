import axios from 'axios';

const Data = {};

const fetchData = async () => {
    const {data} = await axios.get('https://kissan-mandi.herokuapp.com/api/products');
    Data = data;
    console.log(data.Cereals);
}

fetchData();

export default Data;