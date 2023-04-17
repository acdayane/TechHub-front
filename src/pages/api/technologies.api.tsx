import axios from "axios";

export async function getTechnologies() {
  const result = await axios.get(`${process.env.API_URL}/technologies`);
  return result.data;
}

export async function getTechnologyById(id: number) {
  const result = await axios.get(`${process.env.API_URL}/technologies/${id}`);
  return result.data;
}
