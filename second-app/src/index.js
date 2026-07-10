import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./nav.js"
import Hero from "./hero.js"
import Card from "./card.js"
import "./index.css"
import Data from "./data.js"

function App() {
    const card = Data.map(data => {
      return <Card 
                key = {data.id}
                data={data}
             />
    
    })
  return (
  <div>
    <Nav/>
    <Hero/>
    <div className='allcards'>
      {card}
    </div> 
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

