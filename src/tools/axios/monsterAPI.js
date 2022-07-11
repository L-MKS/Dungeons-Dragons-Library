import axios from "axios";

const monsterApi = axios.create ({
    baseURL: "https://www.dnd5eapi.co/api/monsters/"
})

export default monsterApi