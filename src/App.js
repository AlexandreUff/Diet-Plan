import React from 'react';
import CardInfo from './components/CardInfo';
/* import './App.css'; */
import { GitHubIco, InstagramIco, LinkedInIco, MainIco } from './components/Icons';
import InputStyled from './components/inputStyled';

export default function App(){
  return (
    <div className='main-background'>
      <div className='background-effect'>
        <header>
          <MainIco/> <h1>DIET PLAN</h1>
        </header>

        <main>
          <CardInfo
            title="Olá! Seja muito bem-vindo!"
            buttonsType="confirm"
            buttonText="COMEÇAR"
          >
            {/* <p>
              Aqui você poderá descobrir com detalhes qual é a sua taxa de matabolismo basal e 
              qual o consumo ideal de macronutrientes indicados para seu objetivo, seja 
              emagracimento ou hipertrofia muscular.
            </p> */}
            <InputStyled title=" Kg" placeholder="Ex.: 85.4" />
          </CardInfo>
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
