import axios from 'axios'

export async function getSchools() {
    console.log(process.env.API_URL);
    const result = await axios.get(`http://localhost:4000/schools`);
    return result.data;
}