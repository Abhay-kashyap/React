import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return (
        <div>
            <h1>Custom App || Abhay</h1>
        </div>
    )
}
// const reactElement ={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank',

//     },
//     children: "Click me to visit google"
// }
const anotherUser='chai aur react';
const anotherELement=(
    <a href="https://google.com">visit google</a>
)
const reactElement=React.createElement(
    'a',
    {
        href:'https.google.com',
        target:'_blank'
    },
    'click me to visit',
    anotherUser
)
// const anotherUser='chai aur react';
createRoot(document.getElementById('root')).render(
    // <App/>
    // anotherELement
   reactElement
  
)
