import axios from 'axios'

export async function getCourses() {
    const result = await axios.get(`${process.env.API_URL}/courses`);
    return result.data;
}

export async function getCourseById(id: number) {
    const result = await axios.get(`${process.env.API_URL}/courses/${id}`);
    return result.data;
}
