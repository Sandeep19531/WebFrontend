import axios from 'axios';

const Data = {};

const fetchData = async () => {
    const {data} = await axios.get('http://127.0.0.1:5000/api/products');
    Data = data;
    console.log(data.Cereals);
}

fetchData();

export default Data;