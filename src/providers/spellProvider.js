import { createContext, useCallback, useState } from "react";
import spellApi from "../tools/axios/spellAPI.js";

export const SpellContext = createContext({
    name: {},
    desc: {},
    higher_level: {},
    range: {},
    components: [],
    material: {},
    ritual: false,
    duration: {},
    concentration: false,
    casting_time: {},
    level: 0,
    school: {
        name: {}
    },
})

function Spells({ children }){

    const [spellState, setSpellState] = useState({
        hasSpell: false,
        name: undefined,
        desc: undefined,
        higher_level: undefined,
        range: undefined,
        components: undefined,
        material: undefined,
        ritual: false,
        duration: undefined,
        concentration: false,
        casting_time: undefined,
        level: 0,
        school: {
            name: undefined,
        }
    });

    const searchSpell = (spellName) => {spellApi.request(spellName).then(function(response){

            setSpellState(prevState => ({
                ...prevState,
                hasSpell: true,
                name: response.data.name,
                desc: response.data.desc,
                higher_level: response.data.higher_level,
                range: response.data.range,
                components: response.data.components,
                material: response.data.material,
                ritual: response.data.ritual,
                duration: response.data.duration,
                concentration: response.data.concentration,
                casting_time: response.data.casting_time,
                level: response.data.level,
                school: {
                    name: response.data.school.name,
                }
            }))

        }).catch(

            setSpellState(prevState => ({
                ...prevState,
                hasSpell: false,
            }))
        )
    }
    
    

    const contextValue = {
        spellState,
        searchSpell: useCallback((spellName) => searchSpell(spellName), []),
    }

    return(
        <SpellContext.Provider value={contextValue}>
            {children}
        </SpellContext.Provider>
    )
}

export default Spells

