import { useState } from 'react'
import AppTopBar from './Layouts/AppTopBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppTopBar/>
    </>
  )
}

export default App
