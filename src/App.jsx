import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseList from './pages/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseList/>
     <h1>hello world</h1>
     <p>hello ji kya hal chal dosto aapke  badhiya aap btaiye</p>
    </>
  )
}

export default App
