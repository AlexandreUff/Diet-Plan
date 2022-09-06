import React, { useState } from 'react';
import CardData from './components/CardData';
import FormArea from './components/FormArea';
/* import './App.css'; */
import { GitHubIco, InstagramIco, LinkedInIco, MainIco } from './components/Icons';

export default function App(){

  const [peso,setPeso] = useState(null);
  const [estatura,setEstatura] = useState(null);
  const [idade,setIdade] = useState(null);

  return (
    <div className='main-background'>
      <div className='background-effect'>
        <header>
          <MainIco/> <h1>DIET PLAN</h1>
        </header>

        <main>
          <CardData>
              <FormArea>
                <h2>Olá! Seja muito bem-vindo!</h2>
                <p>
                  Aqui você poderá descobrir com detalhes qual é a sua taxa de matabolismo basal e 
                  qual o consumo ideal de macronutrientes indicados para seu objetivo, seja 
                  emagracimento ou hipertrofia muscular.
                </p>
              </FormArea>
              <FormArea>
                <h2>Digite seu peso em kg</h2>
                <label>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                      <input
                          onChange={e => setPeso(e.value)}
                          type="text"
                          className={`inputStyled`}
                          placeholder={"Ex.: 70.5 Kg"}
                          value={peso}
                      />
                      {"Kg"}
                  </div>
                </label>
              </FormArea>
              <FormArea>
              <h2>Digite sua estatura em centímetros (cm)</h2>
                <label>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                      <input
                          onChange={e => setEstatura(e.value)}
                          type="text"
                          className={`inputStyled`}
                          placeholder={"Ex.: 185 cm"}
                          value={estatura}
                      />
                      {"cm"}
                  </div>
                </label>
              </FormArea>
              <FormArea>
              <h2>Digite sua idade</h2>
                <label>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                      <input
                          onChange={e => setIdade(e.value)}
                          type="text"
                          className={`inputStyled`}
                          placeholder={"Ex.: 25 anos"}
                          value={idade}
                      />
                      {"ano(s)"}
                  </div>
                </label>
              </FormArea>
              <FormArea>
              <h2>Selecione seu nível de atividade</h2>
                <label>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                      <select className={'inputStyled'}>
                        <option value={"nad"}>Sedentário (Nenhum ou pouco exercício)</option>
                        <option value={"lev"}>Levemente ativo (1 a 3 dias de exercício por semana)</option>
                        <option value={"mod"}>Moderadamente ativo (3 a 5 dias de exercício por semana)</option>
                        <option value={"alt"}>Altamente ativo (exercício pesado de 5 a 6 dias por semana)</option>
                        <option value={"ext"}>Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)</option>
                      </select>
                  </div>
                </label>
              </FormArea>
              <FormArea>
              <h2>Marque a opção que corresponda a seu sexo:</h2>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center', justifyContent:'space-evenly', borderTop: '1px solid gray'}}>
                    <label>
                      <input type={"radio"} name="sexo" className={`inputStyled`} id='M' value={"M"} style={{marginRight:'10px'}} />Masculino
                    </label>
                    <label>
                      <input type={"radio"} name="sexo" className={`inputStyled`} id='F' value={"F"} style={{marginRight:'10px'}} />Feminino
                    </label>
                  </div>
              </FormArea>
              <FormArea>
              <h2>Por fim, qual o seu objetivo:</h2>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center', justifyContent:'space-evenly', borderTop: '1px solid gray'}}>
                    <label>
                      <input type={"radio"} name="objetivo" className={`inputStyled`} id='M' value={"M"} style={{marginRight:'10px'}} />Hipertrofia
                    </label>
                    <label>
                      <input type={"radio"} name="objetivo" className={`inputStyled`} id='F' value={"F"} style={{marginRight:'10px'}} />Emagracimento
                    </label>
                  </div>
              </FormArea>
          </CardData>
        </main>
        
        <footer>
          <nav>
            <ul>
              <li>
                <LinkedInIco />
              </li>
              <li>
                <GitHubIco />
              </li>
              <li>
                <InstagramIco />
              </li>
            </ul>
          </nav>
          <p>Créditos Imagens: "Jão"</p>
          <p>&copy; 2022  - Alexanddre Magno Dias</p>
        </footer>
      </div>
    </div>
  )
}


/* 
CARD DATA:
  <h2>{props.title}</h2>
            <>
                {props.children}
            </>
            {
                props.buttonsType === "confirm" ?
                <button>{props.buttonText}</button> : 
                <div style={{display:"flex"}}>
                    <button>{"<<"}</button><button>{">>"}</button>
                </div>
            }
*/

/* 
  FORM AREA:
   <label>
            Digite seu peso em kg
            <div>
                <input
                    type="text"
                    name={`inputStyled-${props.title}`}
                    id={`inputStyled-${props.title}`}
                    placeholder={props.placeholder}
                    value={val}
                    onChange={e => useVal(e.target.value)}
                />
                {props.title}
            </div>
    </label>
*/