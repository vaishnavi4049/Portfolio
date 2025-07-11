import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PortfolioPage from './portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PortfolioPage>
      </PortfolioPage>
    </>
  )
}

export default App
