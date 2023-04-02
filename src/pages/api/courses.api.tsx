import axios from 'axios'

export async function getCourses() {
    console.log(process.env.API_URL);
    const result = await axios.get(`http://localhost:4000/courses`);
    return result.data;
}

export async function getCourseById() {
    console.log(process.env.API_URL);
    const result = await axios.get(`http://localhost:4000/courses/1`);
    return result.data;
}
