import { useState } from 'react'
import './App.css'
import CarCard from './assets/Components/CarCard'
import carList from './assets/Components/tableau';



function App() {

  return (
    <>
{carList.map((props, i) => <CarCard key={i} {...props} />)}
    </>
  )
}

export default App
