import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/auth/Login'
import Home from './pages/home/Home'
import QuizPage from './pages/quiz/QuizPage'
import { Result } from "./pages/result/Result";
import SignUpPage from "./pages/auth/signup/SignUpPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App;
