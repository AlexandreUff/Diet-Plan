import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import CardData from './components/CardData';
import FormArea from './components/FormArea';
/* import './App.css'; */
import { GitHubIco, InstagramIco, LinkedInIco, MainIco } from './components/Icons';

export default function App(){

  const [getUrl, setGetUrl] = useState("");

  return (
    <div className='main-background'>
      <div className='background-effect'>
        <header>
          <MainIco/> <h1>DIET PLAN</h1>
        </header>

        <main>
          <Router>
            <Routes>
              <Route index element={<Home func={(url)=>{setGetUrl(url)
              setTimeout(()=>console.log("getUrl:",getUrl),1000)}} />} />
              <Route path={`/result/:obj/:atividade/:proteinMin/:proteinMax/:carboMin/:carboMax/:fat/:metabolicRate/:caloricExpenditure`} element={<Result />} />
              <Route path={`/result/:obj/:atividade/:protein/:carbo/:fat/:metabolicRate/:caloricExpenditure`} element={<Result />} />
            </Routes>
          </Router>
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
          <p>&copy; 2022  - Alexandre Magno Dias</p>
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