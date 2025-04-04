import { useState } from "react";
import poke from './assets/pokeapi_256.png'

function App() {



  // var nome = "Victor";

  const Formulario = (props) => {

    const [nome, setNome] = useState("Jesus")


    return (
      <div>
        <input
          className="nome"
          name="nome"
          onChange={(e) => { setNome(e.target.value) }}
          placeholder={props.sombra != null ? props.sombra : "Texto padrão"}
          type="text" />

        <button
          className="Botao"
          onClick={() => { alert(nome) }}>
            CLIQUE AQUI
        </button>
      </div>
    )
  }

  return (
    <div>
      <img src={poke} style={{width:200, height:100}} />
      <img src={poke} style={{width:200, height:100}} />
      <h3>Pizzaria 2F</h3>
      <Formulario sombra="digite seu nome..." />
      <Formulario sombra="digite seu e-mail" />
      <Formulario sombra="(99)90000-0000" />
      <Formulario />
      <Formulario />
      <Formulario />
    </div>

  )
}

export default App