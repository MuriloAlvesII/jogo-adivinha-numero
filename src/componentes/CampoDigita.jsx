function CampoDigita({Numero, setNumero, NumeroAleatorio, QuatiTentativas, Mensagem, MostraNumero, VerificaNumero}){

    return(
        <div>
            <div>
                <p>Tentativas: {QuatiTentativas}</p>
            </div>
            <hr />

            <div className="CampoAdivinha">
                <h1>Numero Misterioso:</h1>
                <h2>{MostraNumero ? NumeroAleatorio: "?"}</h2>
            </div>
            <hr />

            <div className="CampoMensagem">
                <h2>{Mensagem}</h2>
            </div>
            <hr />

            <div className="CampoDigita">
                <h1>Digite aqui:</h1>

                <input type="number"
                        value={Numero}
                        onChange={(e)=> setNumero(Number(e.target.value))}
                />

                <button className="BtnAdivimhar" onClick={VerificaNumero}>Adivinhar</button>
            </div>
        </div>
    );
}

export default CampoDigita;