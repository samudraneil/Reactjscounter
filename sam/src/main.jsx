import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const Anotherelement=(
  <a href="www.google.com" target='_blank'> click here to visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <Anotherelement/>
)
