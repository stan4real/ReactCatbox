import React from 'react'
import  Router from './components/Router'
import ReactDOM from 'react-dom/client'
import Home from './components/ui/screens/Home/Home'
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
