import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BinaryBattlefieldComponent from './components/binary_battlefield'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BinaryBattlefieldComponent /> 
    </>
  )
}

export default App
