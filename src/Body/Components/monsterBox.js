import "../Box.css"
import MonsterHook from "../../tools/hooks/monsterHook"
import NotFound from "./notFound"
import PHere from "../../tools/other/PTag"
import BigPHere from "../../tools/other/bigPTag"
import SpecialPHere from "../../tools/other/specialPTag"

function MonsterBox(){

    const { monsterState } = MonsterHook()
 
    function verifyProficiency(){
        if(monsterState.proficiencies.length === 0){
        return
    } else {
        return(           
            <div className="smallBox2">
                <h2 className="info">Proficiências</h2>
                {monsterState.proficiencies.map((thing) => (<PHere item={thing.proficiency.name}/>))}
            </div>
            )
    }}

    function verifyImmunities(){
        if((monsterState.condition_immunities.length + monsterState.damage_immunities.length)=== 0){
        return
    } else {
        return(           
                <div className="smallBox2">
                    <h2 className="info">Imunidades</h2>
                    {monsterState.condition_immunities.map((thing) => (<PHere item={thing.name}/>))}
                    {monsterState.damage_immunities.map((thing) => (<PHere item={thing}/>))}
                </div>
            )
    }}
   
    function verifyResistences(){
        if(monsterState.damage_resistances.length=== 0){
        return
    } else {
        return(           
                <div className="smallBox2">
                    <h2 className="info">Resistências</h2>
                    {monsterState.damage_resistances.map((thing) => (<PHere item={thing}/>))}
                </div>
            )
    }}

    function verifyVulnerabilities(){
        if(monsterState.damage_vulnerabilities.length=== 0){
        return
    } else {
        return(           
                <div className="smallBox2">
                    <h2 className="info">Vulnerabilidades</h2>
                    {monsterState.damage_vulnerabilities.map((thing) => (<PHere item={thing}/>))}
                </div>
            )
    }}

    function verifyLegendaryActions(){
        if(monsterState.legendary_actions.length===0){
            return
        } else {
            return(
                <div className="resultBox">
                    <h2 className="info">Ações Lendárias</h2>
                    {monsterState.legendary_actions.map((thing) => (
                        <>
                        <SpecialPHere item={thing.name}/>
                        <BigPHere item={thing.desc}/>
                        </>
                    ))}
                </div>
            )
    }}

    function verifyAbilities(){
        if(monsterState.special_abilities.length===0){
            return
        } else {
            return(
                <div className="resultBox">
                    <h2 className="info">Habilidades especiais</h2>
                    {monsterState.special_abilities.map((thing) =>(
                        <>
                        <SpecialPHere item={thing.name +": "}/>
                        <BigPHere item={thing.desc}/>
                        </>
                    ))}
                </div>
            )
    }}

    return(<>
        {monsterState.hasMonster ? (
            <div className="BigBox">

                <div className="monsterBox">

                    <h1 className="Name">{monsterState.name}</h1>
                    <h3 className="Type">{monsterState.alignment} - {monsterState.size} - {monsterState.type}</h3>
                    <h3 className="Level">Level  {monsterState.challenge_rating} ({monsterState.xp} XP)</h3>

                </div>

                <div className="resultBoxMany">

                    <div className="smallBox">
                        <h2 className="info">Atributos</h2>
                        <p className="smallText">Força: {monsterState.strength} ({Math.floor((monsterState.strength-10)/2)})</p>
                        <p className="smallText">Destreza: {monsterState.dexterity} ({Math.floor((monsterState.dexterity-10)/2)})</p>
                        <p className="smallText"> Constituição: {monsterState.constitution} ({Math.floor((monsterState.constitution-10)/2)})</p>
                        <p className="smallText"> Inteligência: {monsterState.intelligence} ({Math.floor((monsterState.intelligence-10)/2)})</p>
                        <p className="smallText"> Sabedoria: {monsterState.wisdom} ({Math.floor((monsterState.wisdom-10)/2)})</p>
                        <p className="smallText"> Carisma: {monsterState.charisma} ({Math.floor((monsterState.charisma-10)/2)})</p>
                    </div>

                    <div className="smallBox">
                        <h2 className="info">Características</h2>
                        <p className="smallText">Pontos de vida: {monsterState.hit_points} ({monsterState.hit_dice})</p>
                        <p className="smallText">Classe de armadura: {monsterState.armor_class}</p>
                        <p className="smallText">Deslocamento(corrida): {monsterState.speed.walk}</p>
                        <p className="smallText">Deslocamento(voo): {monsterState.speed.fly}</p>
                        <p className="smallText">Deslocamento(natação): {monsterState.speed.swim}</p>
                        <p className="smallText">Idiomas: {monsterState.languages}</p>
                    </div>

                    {verifyProficiency()}
                    {verifyImmunities()}
                    {verifyResistences()}
                    {verifyVulnerabilities()}

                </div>

                {verifyAbilities()}

                <div className="resultBox">
                    <h2 className="info">Ações</h2>
                    {monsterState.actions.map((thing) => (
                        <>
                        <SpecialPHere item={thing.name}/>
                        <BigPHere item={thing.desc}/>
                        </>
                    ))}
                </div>

                {verifyLegendaryActions()}

            </div>
        ) : (<NotFound/>)}
        </>)   
}

export default MonsterBox