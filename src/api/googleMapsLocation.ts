import axios from "axios";

const googleMapsLocation = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/json?address=",
});

export default googleMapsLocation;