import axios from 'axios'

export async function getTechnologies() {
    console.log(process.env.API_URL);
    const result = await axios.get(`http://localhost:4000/technologies`);
    return result.data;
}

export async function getTechnologyById(id: number) {
    console.log(process.env.API_URL);
    const result = await axios.get(`http://localhost:4000/technologies/${id}`);
    return result.data;
}

