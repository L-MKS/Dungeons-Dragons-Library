import { createContext, useCallback, useState } from "react";
import featuresApi from "../tools/axios/featuresAPI";

export const FeaturesContext = createContext({
    name: {},
    class: {},
    level: 0,
    desc: {}
})

function Features ({ children }){

    const [featureState, setFeatureState] = useState({
        hasFeature: false,
        name: undefined,
        class: { 
            name: undefined
        },
        level: 0,
        desc: undefined
    });

    const searchFeature = (featureName) => {
        featuresApi.request(featureName).then(function(response){

            setFeatureState(prevState => ({
                ...prevState,
                hasFeature: true,
                name: response.data.name,
                class: response.data.class.name,
                level: response.data.level,
                desc: response.data.desc
            }))

        }).catch(

            setFeatureState(prevState => ({
                ...prevState,
                hasFeature: false,
            }))
        )
    }

    const contextValue = {
        featureState,
        searchFeature: useCallback((featureName) => searchFeature(featureName), []),
    }

    return(
        <FeaturesContext.Provider value={contextValue}>
            {children}
        </FeaturesContext.Provider>
    )
}

export default Features
