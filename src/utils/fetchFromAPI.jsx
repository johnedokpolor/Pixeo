import axios from "axios";

const fetchFromYTAPI = async (url) => {
  const base_url = "https://youtube.googleapis.com/youtube/v3";
  const options = {
    method: "GET",
    url: base_url,
    params: {
      regionCode: "US",
      key: "AIzaSyC - KHbiq206f_e9at6T6oEPJ5l8bGPmGyI",
    },
  };

  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error.response.status);
    return error.response.status;
  }
};
const fetchFromRAAPI = async (url) => {
  const base_url = "https://youtube-v31.p.rapidapi.com";
  const options = {
    method: "GET",
    url: base_url,
    params: {
      regionCode: "US",
    },
    headers: {
      "x-rapidapi-key": "a8b32c8569msh70881b7536276fep1a614cjsnffacec935f2e",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error.response.status);
    return error.response.status;
  }
};

export { fetchFromYTAPI, fetchFromRAAPI };
