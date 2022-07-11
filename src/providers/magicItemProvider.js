import { createContext, useCallback, useState } from "react";
import magicItemApi from "../tools/axios/magicItemAPI";

export const MagicItemContext = createContext({
    name: {},
    equipment_category: {
        name: {}
    },
    rarity: {
        name: {}
    },
    desc: {}
})

function MagicItems ({ children }){

    const [itemState, setItemState] = useState({
        hasItem: false,
        name: undefined,
        equipment_category: {
            name: undefined
        },
        rarity: {
            name: undefined
        },
        desc: undefined
    });

    const searchItem = (itemName) => {
        magicItemApi.request(itemName).then(function(response){

            setItemState(prevState => ({
                ...prevState,
                hasItem: true,
                name: response.data.name,
                equipment_category: {
                name: response.data.equipment_category.name,
                },
                rarity: {
                name: response.data.rarity.name,
                },
                desc: response.data.desc
            }))

        }).catch(

            setItemState(prevState => ({
                ...prevState,
                hasItem: false,
            }))
        )
    }
    
    const contextValue = {
        itemState,
        searchItem: useCallback((itemName) => searchItem(itemName), []),
    }

    return(
        <MagicItemContext.Provider value={contextValue}>
            {children}
        </MagicItemContext.Provider>
    )
}

export default MagicItems

