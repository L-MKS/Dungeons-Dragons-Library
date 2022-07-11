import axios from "axios";

const magicItemApi = axios.create ({
    baseURL: "https://www.dnd5eapi.co/api/magic-items/"
})

export default magicItemApi