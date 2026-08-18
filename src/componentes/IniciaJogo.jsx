import { useState } from "react";
import CampoDigita from "./CampoDigita";

function IniciaJogo(){
    const [AtivaCampo, setAtivaCampo] = useState(false);

    const [NumeroAleatorio] = useState(Math.floor(Math.random()*100)+1);

    const [QuatiTentativas, setQuatiTentativas] = useState(0);

    const [Numero, setNumero] = useState("");
    const [Mensagem,setMensagem] = useState("");
    const [MostraNumero, setMostraNumero] = useState(false);

    function VerificaNumero(){
        setQuatiTentativas(QuatiTentativas + 1);

        if (Numero === NumeroAleatorio){
            setMensagem("Parabens, você acertou!");
            setMostraNumero(true);
        } else if (Numero > NumeroAleatorio){
            setMensagem("O número secreto é menor!");
        } else {
            setMensagem("O número secreto é maior!");
        }
    }

    return(
        <div>
            {!AtivaCampo && (<button className="BtnJogar" onClick={()=>setAtivaCampo(true)}>Jogar</button>)}

            {AtivaCampo && (
                <CampoDigita
                    Numero={Numero}
                    setNumero={setNumero}
                    NumeroAleatorio={NumeroAleatorio}
                    QuatiTentativas={QuatiTentativas}
                    Mensagem={Mensagem}
                    MostraNumero={MostraNumero}
                    VerificaNumero={VerificaNumero}
                />
            )}
        </div>
    );
}

export default IniciaJogo;