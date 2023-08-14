import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/auth/Login'
import Home from './pages/home/Home'
import QuizPage from './pages/quiz/QuizPage'
import { Result } from "./pages/result/Result";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </>
  )
}

export default App
