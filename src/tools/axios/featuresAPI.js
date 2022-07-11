import axios from "axios";

const featuresApi = axios.create ({
    baseURL: "https://www.dnd5eapi.co/api/features/"
})

export default featuresApi