import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "./context/quiz-context";
import "./navbar.css"
import SearchBar from "./searchBar/SearchBar";
const Navbar = ({route}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { quizDispatch } = useQuiz();

    const handleAuthClick = () => {
        if (token){
            localStorage.clear();
            quizDispatch({
                type: "QUIT"
            })
        }
        navigate("/");
    }

    const handleEndGameClick = () => {
        quizDispatch({
            type: "QUIT"
        })
    }
    const userName = localStorage.getItem("userName");
    return (
        <header className="heading head-navbar d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                {/* <img className="icon mr-1" src="../src/assets/logo.png" alt="logo" /> */}
                <h1 className="logo-name">Quizonik</h1>
                {/* <h1 className="heading-title">
                    {
                        route === "home" || route === "login" ? (<Link to="/" className="link">EduNest</Link>) : ""
                    }
                </h1> */}
             
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <div className="d-flex align-center search-bar-container">
                    {   route === "home" && <SearchBar/> }
                      {  route === "home" && (
                            
                            <li className="list-item-inline">
                              
                                <Link to="/auth/login" className="link cursor" onClick={handleAuthClick}> {token ? `hi ${userName} Logout` : "Login"} </Link>
                            </li>
                        )
                    }
                    </div>
                    {
                        route === "result" && (
                            <Fragment>
                                <li className="list-item-inline">
                                    <Link to="/" className="link cursor" onClick={handleEndGameClick}>Home</Link>
                                </li>
                                <li className="list-item-inline">
                                    <span className="link cursor" onClick={handleAuthClick}>Logout</span>
                                </li>
                             </Fragment>
                        )
                    }
                    
                </ul>
            </nav>
        </header>
    )
}
export default Navbar