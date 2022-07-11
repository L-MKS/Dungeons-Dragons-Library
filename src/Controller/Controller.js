import { PressSpell, PressItem, PressMonster, PressTalento, Button } from "../tools/other/botoes"
import { useState } from "react"

import logo from "../assets/logo.png"
import "./Controller.css"
import Box from "../Body/Box"

import SpellHook from "../tools/hooks/spellHooks"
import MonsterHook from "../tools/hooks/monsterHook"
import MagicItemHook from "../tools/hooks/magicItemHook"
import FeatureHook from "../tools/hooks/featuresHook"

import Welcome from "../Body/Components/welcome"
import SpellBox from "../Body//Components/spellBox"
import MonsterBox from "../Body//Components/monsterBox"
import MagicItemBox from "../Body/Components/magicItemBox"
import FeaturesBox from "../Body/Components/featureBox"



function Controller(){

    const { searchSpell } = SpellHook()
    const { searchMonster } = MonsterHook()
    const { searchItem } = MagicItemHook()
    const { searchFeature } = FeatureHook()
    const [what, setWhat] = useState()
    const [show, setShow] = useState(<Welcome/>)

    function Button () {

        const spellButton = document.getElementById("BotMagias")
        const monsterButton = document.getElementById("BotMonstros")
        const itemButton = document.getElementById("BotItens")
        const featureButton = document.getElementById("BotTalentos")

        if(spellButton.classList.contains("shadow")){

            if(!what){
                alert("Escreva alguma coisa antes de pesquisar")
                return
            } else {
                searchSpell(what)
                setShow(<SpellBox/>)
            }      

        } else if (monsterButton.classList.contains("shadow")){

            if(!what){
                alert("Escreva alguma coisa antes de pesquisar")
                return
            } else {
                searchMonster(what)
                setShow(<MonsterBox/>)
            }
           
        } else if (itemButton.classList.contains("shadow")){

            if(!what){
                alert("Escreva alguma coisa antes de pesquisar")
                return
            } else {
                searchItem(what)
                setShow(<MagicItemBox/>)
            }

        } else if (featureButton.classList.contains("shadow")){

            if(!what){
                alert("Escreva alguma coisa antes de pesquisar")
                return
            } else {
                searchFeature(what)
                setShow(<FeaturesBox/>)
            }

        } else if(!what){
            alert("Selecione uma opção antes de buscar (botões vermelhos acima da barra de busca)")
            return
        } else {alert("Escreva alguma coisa antes de pesquisar")}

    }

    return(
        <>
        <header className="topo">

            <img alt="logo" id="logo" src={logo}></img>

            <div className="head">

                <h1 id="h1buscador">DUNGEONS & DRAGONS LIBRARY</h1>

                <div id="opcoes">
                    <button onClick={() => PressMonster()} id="BotMonstros" className="select">MONSTROS</button>
                    <button onClick={() => PressSpell()} id="BotMagias" className="select">MAGIAS</button>
                    <button onClick={() => PressItem()} id="BotItens" className="select">ITENS MÁGICOS</button>
                    <button onClick={() => PressTalento()} id="BotTalentos" className="select">HABILIDADES</button>
                </div>

                <div className="busca">
                    <input onChange={(event) => setWhat(event.target.value.toLowerCase().replace(/ /gi, "-"))} placeholder="Digite aqui o que você está procurando..."></input>
                    <button onClick={Button} >PESQUISAR</button>
                </div>

            </div>

        </header>
        <Box renderThis={show}/>
        </>
    )

}

export default Controller