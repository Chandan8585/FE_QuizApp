import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ quiz }) => {
  const {category, image, title, description } = quiz;
  const token = localStorage.getItem("token");
  const {quizDispatch} = useQuiz();
  const navigate = useNavigate();
  const handlePlayNowClick = () => {
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

      <div className="card card-vertical d-flex direction-column relative shadow">
        <div className="card-image-container">
          <img className="card-image" src={`${image}`} />
        </div>
        <div className="card-details">
          <h1>{category}</h1>
          <div className="card-title">{title}</div>
          <div className="card-description">
            <p className="card-des">{description}</p>
          </div>
          <div className="cta-btn"  >
            <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
            onClick={handlePlayNowClick}>
        
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default CategoryCard;
