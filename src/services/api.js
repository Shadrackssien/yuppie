import axios from "axios";

const API_KEY = process.env.VUE_APP_RAPID_API_KEY;
const BASE_URL = "https://imdb236.p.rapidapi.com/imdb";

const headers = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "imdb236.p.rapidapi.com",
};

export const fetchData = async (endpoint = "most-popular-movies") => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await axios.get(url, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
