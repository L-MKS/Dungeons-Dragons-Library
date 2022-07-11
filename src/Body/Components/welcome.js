import "../Box.css"
function Welcome() {

    return(

        <div className="BigBox">

            <div className="Box">    
                <h1 className="title">BEM VINDO AO D&D LIBRARY!</h1>
            </div>

            <div className="smallBox">    
                <p className="text">Para realizar sua pesquisa, selecione uma das opções no cabeçalho e depois utilize a barra de busca.</p>
            </div>

            <div className="Box">
            <h2 className="title">EXEMPLOS DE PESQUISA</h2>
            </div>
            <div className="resultBoxMany">

                <div className="smallBox2"> 
                    <h2 className="info">Monstros:</h2>   
                    <p className="smallText">Medusa</p>
                    <p className="smallText">Mummy Lord</p>
                    <p className="smallText">Balor</p>
                    <p className="smallText">Ancient Red Dragon</p>
                </div>

                <div className="smallBox2"> 
                    <h2 className="info">Magias:</h2>   
                    <p className="smallText">Blink</p>
                    <p className="smallText">Fireball</p>
                    <p className="smallText">Charm Person</p>
                    <p className="smallText">Wish</p>
                </div>

                <div className="smallBox2"> 
                    <h2 className="info">Itens Mágicos:</h2>   
                    <p className="smallText">Oathbow</p>
                    <p className="smallText">Winged Boots</p>
                    <p className="smallText">Nine Lives Stealer</p>
                    <p className="smallText">Orb of Dragonkind</p>
                </div>

                <div className="smallBox2">
                <h2 className="info">Habilidades:</h2>    
                    <p className="smallText">Deflect Missiles</p>
                    <p className="smallText">Sneak Attack</p>
                    <p className="smallText">Rage</p>
                    <p className="smallText">Slow Fall</p>
                </div>

            </div>
            
        </div>
    )
}

export default Welcome