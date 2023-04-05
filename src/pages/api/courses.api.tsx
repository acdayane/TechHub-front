import axios from 'axios'

export async function getCourses() {
    const result = await axios.get(`${process.env.API_URL}/courses`);
    return result.data;
}

export async function getCourseById(id: number) {
    const result = await axios.get(`${process.env.API_URL}/courses/1`);
    return result.data;
}
