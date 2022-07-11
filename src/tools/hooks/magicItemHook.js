import { useContext } from "react"
import { MagicItemContext } from "../../providers/magicItemProvider"

function MagicItemHook (){
    const { itemState, searchItem } = useContext(MagicItemContext)
    return { itemState, searchItem }
}
export default MagicItemHook