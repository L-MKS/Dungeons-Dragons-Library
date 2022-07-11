import { createContext, useCallback, useState } from "react";
import monsterApi from "../tools/axios/monsterAPI.js";

export const MonsterContext = createContext({
    name: {},
    size: {},
    type: {},
    alignment: {},
    armor_class: 0,
    hit_points: 0,
    hit_dice: {},
    speed: {
        walk: {},
        fly: {},
        swim: {},
    },
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    languages: {},
    challenge_rating: 0,
    xp: 0,
    special_abilities: [],
    actions: [],
    legendary_actions: []
})

function Monsters({ children }){

    const [monsterState, setMonsterState] = useState({
        hasMonster: false,
        name: undefined,
        size: undefined,
        type: undefined,
        alignment: undefined,
        armor_class: 0,
        hit_points: 0,
        hit_dice: undefined,
        speed: {
            walk: undefined,
            fly: undefined,
            swim: undefined,
        },
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        proficiencies: [],
        damage_vulnerabilities: [],
        damage_resistances: [],
        damage_immunities: [],
        condition_immunities: [],
        languages: undefined,
        challenge_rating: 0,
        xp: 0,
        special_abilities: [],
        actions: [],
        legendary_actions: [],
    });

    const searchMonster = (monsterName) => {
        monsterApi.request(monsterName).then(function(response) {

            setMonsterState(prevState => ({
                ...prevState,
                hasMonster: true,
                name: response.data.name,
                size: response.data.size,
                type: response.data.type,
                alignment: response.data.alignment,
                armor_class: response.data.armor_class,
                hit_points: response.data.hit_points,
                hit_dice: response.data.hit_dice,
                speed: {
                    walk: response.data.speed.walk,
                    fly: response.data.speed.fly,
                    swim: response.data.speed.swim,
                },
                strength: response.data.strength,
                dexterity: response.data.dexterity,
                constitution: response.data.constitution,
                intelligence: response.data.intelligence,
                wisdom: response.data.wisdom,
                charisma: response.data.charisma,
                proficiencies: response.data.proficiencies,
                damage_vulnerabilities: response.data.damage_vulnerabilities,
                damage_resistances: response.data.damage_resistances,
                damage_immunities: response.data.damage_immunities,
                condition_immunities: response.data.condition_immunities,
                languages: response.data.languages,
                challenge_rating: response.data.challenge_rating,
                xp: response.data.xp,
                special_abilities: response.data.special_abilities,
                actions: response.data.actions,
                legendary_actions: response.data.legendary_actions,
            }))

        }).catch(
            
            setMonsterState(prevState => ({
                ...prevState,
                hasMonster: false, 
            }))
        )
    }

    const contextValue = {
        monsterState,
        searchMonster: useCallback((monsterName) => searchMonster(monsterName), []),
    }

    return(
        <MonsterContext.Provider value={contextValue}>
            {children}
        </MonsterContext.Provider>
    )
}

export default Monsters
