import FeatureHook from "../../tools/hooks/featuresHook"
import "../Box.css"
import NotFound from "./notFound"

function FeaturesBox(){

    const { featureState } = FeatureHook()

    return (<>

        {featureState.hasFeature ? (
            <div className="BigBox">

                <div className="titleBox">
                    <h1 className="title">{featureState.name}</h1>
                    <h4 className="Level">Level {featureState.level} {featureState.class} feature</h4>
                </div>

                <div className="resultBox">
                    <h2 className="info">Descrição e mecânica:</h2>
                    <p className="descriptText">{featureState.desc}</p>
                </div>

            </div>

        ) : (<NotFound/>)}
    </>)
}

export default FeaturesBox