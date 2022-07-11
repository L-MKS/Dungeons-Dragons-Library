import MagicItemHook from "../../tools/hooks/magicItemHook"
import "../Box.css"
import NotFound from "./notFound"

function MagicItemBox(){

    const { itemState } = MagicItemHook()

    return (<>

        {itemState.hasItem ? (
            <div className="BigBox">

                <div className="titleBox">
                    <h1 className="title">{itemState.name}</h1>
                    <h4 className="Level">{itemState.rarity.name} {itemState.equipment_category.name}</h4>
                </div>

                <div className="resultBox">
                    <h2 className="info">Descrição e mecânica:</h2>
                    <p className="descriptText">{itemState.desc}</p>
                </div>

            </div>

        ) : (<NotFound/>)}
    </>)
}

export default MagicItemBox