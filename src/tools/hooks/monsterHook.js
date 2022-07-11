import { useContext } from "react"
import { MonsterContext } from "../../providers/monsterProvider.js"

function MonsterHook (){
    const { monsterState, searchMonster } = useContext(MonsterContext)
    return { monsterState, searchMonster }
}
export default MonsterHook