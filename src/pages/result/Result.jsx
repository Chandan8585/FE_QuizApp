import { Fragment } from "react";
import { useQuiz } from "../../components/context/quiz-context"
import Navbar from "../../components/Navbar";
import "./Result.css"
export const Result = ()=> {
    const {score} = useQuiz();
    return(
        <Fragment>
            <Navbar route="result"/>
        <div className="result-container">
            <h2>{`Your Score is ${score}`}</h2>
        </div>
        </Fragment>
      
    )
}