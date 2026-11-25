import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiMessage, setApiMessage] = useState('Connecting...')
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed')
        }
        return response.json()
      })
      .then((data) => {
        setApiMessage(data.message)
        setIsConnected(true)
      })
      .catch((error) => {
        setApiMessage('Backend connection failed!')
        setIsConnected(false)
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>LearnEase LMS</h1>
      <h2>Learning Management System</h2>

      <p>
        Backend Status: {isConnected ? 'Connected ✅' : 'Not Connected ❌'}
      </p>

      <p>{apiMessage}</p>
    </div>
  )
}

export default App