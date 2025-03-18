import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizList from './components/QuizList/QuizList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<QuizList/>
    </>
  )
}

export default App
