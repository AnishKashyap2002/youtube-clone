import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    method: "GET",
    url: BASE_URL,
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_ID,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const FetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(url, "now data");
    console.log(data);
    return data;
};
