import React from 'react';
import CardData from './components/CardData';
import FormArea from './components/FormArea';
/* import './App.css'; */
import { GitHubIco, InstagramIco, LinkedInIco, MainIco } from './components/Icons';

export default function App(){

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
                          type="Digite seu peso em Kg"
                          name={`inputStyled`}
                          id={`inputStyled`}
                          placeholder={"Ex.: 84.5 Kg"}
                          value={""}
                      />
                      {"Kg"}
                  </div>
                </label>
              </FormArea>
              <FormArea>
              <h2>Digite seu peso em kg</h2>
                <label>
                  <div style={{height: '70%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                      <input
                          type="Digite seu peso em Kg"
                          name={`inputStyled`}
                          id={`inputStyled`}
                          placeholder={"Ex.: 84.5 Kg"}
                          value={""}
                      />
                      {"Kg"}
                  </div>
                </label>
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