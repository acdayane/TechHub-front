import axios from 'axios'

export async function getToken() {
    const result = await axios.post(`${process.env.API_URL}/sign-in`);
    return result.data;
}

export async function signIn(email: string, password: string) {
    const body = {
        email,
        password
    }

    const result = await axios.post(`${process.env.API_URL}/sign-in`, body);
    return result.data;
}

export async function signUp(name: string, email: string, password: string) {
    const body = {
        name,
        email,
        password
    }

    const result = await axios.post(`${process.env.API_URL}/sign-up`, body);
    return result.data;
}