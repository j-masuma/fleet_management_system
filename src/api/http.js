import axios from 'axios';

const url='http://localhost:3000';

const Api=()=>{
    const getAllDrivers=()=>{
        return axios.get(`${url}/drivers`).then((response)=>{
            return response.data;
        })
        .catch(error=>console.error(`Error : ${error}`));
    }
    return{
        getAllDrivers
    }
}
export default Api;