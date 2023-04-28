import axios from "axios";

const openWeather = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/json?address=",
});

export default openWeather;