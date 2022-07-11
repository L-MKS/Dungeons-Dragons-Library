export function PressSpell() {

    const magia = document.getElementById("BotMagias")
    const monstro = document.getElementById("BotMonstros")
    const item = document.getElementById("BotItens")
    const talento = document.getElementById("BotTalentos")

    magia.classList.add("shadow")
    monstro.classList.remove("shadow")
    item.classList.remove("shadow")
    talento.classList.remove("shadow")

}

export function PressMonster() {

    const magia = document.getElementById("BotMagias")
    const monstro = document.getElementById("BotMonstros")
    const item = document.getElementById("BotItens")
    const talento = document.getElementById("BotTalentos")

    monstro.classList.add("shadow")
    magia.classList.remove("shadow")
    item.classList.remove("shadow")
    talento.classList.remove("shadow")
    
}

export function PressItem() {

    const magia = document.getElementById("BotMagias")
    const monstro = document.getElementById("BotMonstros")
    const item = document.getElementById("BotItens")
    const talento = document.getElementById("BotTalentos")

    item.classList.add("shadow")
    monstro.classList.remove("shadow")
    magia.classList.remove("shadow")
    talento.classList.remove("shadow")

}

export function PressTalento() {

    const magia = document.getElementById("BotMagias")
    const monstro = document.getElementById("BotMonstros")
    const item = document.getElementById("BotItens")
    const talento = document.getElementById("BotTalentos")

    talento.classList.add("shadow")
    monstro.classList.remove("shadow")
    item.classList.remove("shadow")
    magia.classList.remove("shadow")

}