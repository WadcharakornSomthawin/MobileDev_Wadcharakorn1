import axios from "axios";
export const BASE_URL="https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        'X-RapidAPI-Key': '73b10b0ec0msh0cc5ebb01d3814dp1e9e6bjsnd0db00d24ffa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}