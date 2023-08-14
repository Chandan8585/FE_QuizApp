import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/context/authContext.jsx'
import { QuizProvider } from './components/context/quiz-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <AuthProvider>
  <QuizProvider>
  <App />
  </QuizProvider>
   </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
