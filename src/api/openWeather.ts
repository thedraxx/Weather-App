import axios from "axios";

const openWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/3.0/onecall/timemachine?",
});

export default openWeather;