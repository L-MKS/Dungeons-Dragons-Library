import axios from "axios";

const spellApi = axios.create ({
    baseURL: "https://www.dnd5eapi.co/api/spells/"
})

export default spellApi