import axios from "axios";

export async function getSchools() {
  const result = await axios.get(`${process.env.API_URL}/schools`);
  return result.data;
}
