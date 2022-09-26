import React from 'react'
import Converter from './components/Converter'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Converter />
    </div>
  )
}

export default App