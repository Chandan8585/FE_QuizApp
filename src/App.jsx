import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/auth/Login'
import Home from './pages/home/Home'
import QuizPage from './pages/quiz/QuizPage'
import { Result } from "./pages/result/Result";
import UserDashBoard from "./pages/userDashBoard/UserDashBoard";
import Gallery from "./pages/userDashBoard/gallery/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/user-dashboard" element={<UserDashBoard />}>
          <Route path="quiz" element={<QuizPage />} />
          <Route path="lecture" element={<Gallery />} />
        </Route>  
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App;
