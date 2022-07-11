import { useContext } from "react"
import { FeaturesContext } from "../../providers/featuresProvider"

function FeatureHook (){
    const { featureState, searchFeature } = useContext(FeaturesContext)
    return { featureState, searchFeature }
}
export default FeatureHook