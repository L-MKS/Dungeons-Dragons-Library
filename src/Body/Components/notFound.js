import "../Box.css"

function NotFound() {

    return(

        <div className="BigBox">

            <div className="Box">    
                <h1 className="title">não encontrado</h1>
            </div>

            <div className="errorBox">    
                <p className="text">Por favor, verifique se escreveu corretamente e tente outra vez!</p>
                <p className="text">Não esqueça: a pesquisa deve ser realizada em inglês!</p>
            </div>

        </div>
    )
}

export default NotFound