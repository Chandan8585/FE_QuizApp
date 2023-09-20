import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./QuizCard.css"
import { useQuiz } from '../context/quiz-context';

const QuizCard = ({quizCategory}) => {
  const navigate = useNavigate();
  const {quizDispatch} = useQuiz();
        const { image, title, description, category } = quizCategory ;
        const token = localStorage.getItem("token");
       
      

        const handlePlayNowClick = ()=>{
          if(token){
            quizDispatch({
                type: "CATEGORY",
                payload: category
            })
            localStorage.setItem("category", category);
            navigate("/quiz");
            
            
          }else{
            navigate("/auth/login")
          }
        }
        return (
      
            <div className=" quiz-card card card-vertical d-flex direction-column relative shadow">
              <div className="card-image-container">
                <img className="card-image" src={`${image}`} />
              </div>
              <div className="card-details">
                <h1>{category}</h1>
                <div className="card-title">{title}</div>
                <div className="card-description">
                  <p className="card-des">{description.slice(0, 70).concat('...')}</p>
                </div>
                <div className="cta-btn" onClick={handlePlayNowClick}>
                  <button className="button play-btn btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          
        );
      };


export default QuizCard