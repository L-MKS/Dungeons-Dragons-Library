import "../Box.css"
import SpellHook from "../../tools/hooks/spellHooks"
import NotFound from "./notFound"

function SpellBox(){    

    const { spellState } = SpellHook()

    const verifyRitual = () => {if(spellState.ritual){
        const available = "Available"
        return available
    } else {
        const unavailable = "Unavailable"
        return unavailable
    }}

    const verifyConcentration = () => {if(spellState.concentration){
        const required = "Required"
        return required
    } else {
        const notRequired = "Not Required"
        return notRequired
    }}

    const verifyLevel = () => {if(spellState.higher_level.length === 0){
        return
    } else {
        return(           
            <div className="resultBox">
                <h2 className="info">Regras para níveis superiores:</h2>
                <p className="descriptText">{spellState.higher_level}</p>
            </div>)
    }}

    return(
        <>
        {spellState.hasSpell ? (

            <div className="BigBox">

                <div className="titleBox">
                    <h1 className="title">{spellState.name}</h1>
                    <h4 className="Level">Level {spellState.level} {spellState.school.name}</h4>
                </div>

                <div className="titleBox">
                    <h2 className="info">Características principais:</h2>
                    <p className="text">Ritual: {verifyRitual()}</p>
                    <p className="text">Componentes: {spellState.components}</p>
                    <p className="text">Concentration: {verifyConcentration()}</p>
                    <p className="text">Tempo de conjuração: {spellState.casting_time}</p>
                    <p className="text">Duração: {spellState.duration}</p>
                    <p className="text">Alcance: {spellState.range}</p>
                </div>

                <div className="resultBox">
                    <h2 className="info">Descrição e mecânica:</h2>
                    <p className="descriptText">{spellState.desc}</p>
                </div>
                
                {verifyLevel()}

            </div>

        ) : (<NotFound/>)}
        </>
    )
    
}

export default SpellBox