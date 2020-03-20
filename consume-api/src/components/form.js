import React, {useState} from 'react'
import axios from 'axios'
import './form.styled.css'

export function Form(){
  const [cep, setCep] = useState()
  const [consulta, setConsulta] = useState({ })
  const [display, setDisplay] = useState(false)

  const getCepDetails = () =>{
    console.log(cep)
    axios
    .get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(({ data }) => {
      setConsulta(data);
      setDisplay(true)
    })
    .catch(function(err) {
      console.error(err);
    })
  }
  
  return(
    <>
      <h1>Consulta CEP</h1>
      <div className='InputArea'>
        <input
          type='text'
          onChange={e => {
            setCep(e.target.value)
          }}
        />
        <button onClick={getCepDetails}>Buscar</button>
      </div>
      { display &&
        <div className='CEPInfos'>
          <div>
            <label>CEP: </label>
            <label>{consulta.cep}</label>
          </div>
        
          <div>
            <label>Logradouro: </label>
            <label>{consulta.logradouro}</label>
          </div>
          
          <div>
            <label>Complemento: </label>
            <label>{consulta.complemento}</label>
          </div>

          <div>
            <label>Bairro: </label>
            <label>{consulta.bairro}</label>
          </div>

          <div>
            <label>Localidade: </label>
            <label>{consulta.localidade}</label>
          </div>

          <div>
            <label>UF: </label>
            <label>{consulta.uf}</label>
          </div>

          <div>
            <label>Unidade: </label>
            <label>{consulta.unidade}</label>
          </div>

          <div>
            <label>IBGE: </label>
            <label>{consulta.ibge}</label>
          </div>

          <div>
            <label>GIA: </label>
            <label>{consulta.gia}</label>
          </div>
        </div>
      }    
    </>
  )
}