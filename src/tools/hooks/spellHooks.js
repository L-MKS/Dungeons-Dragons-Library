import { useContext } from "react"
import { SpellContext } from "../../providers/spellProvider.js"

function SpellHook (){
    const { spellState, searchSpell } = useContext(SpellContext)
    return { spellState, searchSpell }
}
export default SpellHook
