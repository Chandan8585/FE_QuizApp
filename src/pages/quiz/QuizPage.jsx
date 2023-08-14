import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../../components/Navbar'
import QnA from '../../components/questionsAndOptions/QnA'

import { useQuiz } from '../../components/context/quiz-context'

const QuizPage = () => {
    const { quizCategory, quiz , quizDispatch } = useQuiz();
console.log(quizCategory);
    useEffect(() => {
        (async () => {
            try {
                const { data: { data }, } = await axios.get("https://express-sgam.onrender.com/quiz"
                ,{
                    headers: {authorization : localStorage.getItem("token")}
                });
                console.log("from quiz");
                console.log(data);
                const filteredData =data && data.length>0 && data.filter(({category})=> category === quizCategory);
                console.log(filteredData);
                if(filteredData && filteredData.length>0){
                    quizDispatch({
                        type: "SET_QUIZ",
                        payload: filteredData
                    });
                    localStorage.setItem("quiz", JSON.stringify(filteredData));
                }

                // console.log(filteredData)
              
                // setQuiz(filteredData);
            }
             catch (error) {
                console.log(error);
            }
        })()
    }, []); 

    return (    

            <Fragment>
            <Navbar />
            { quiz && quiz.length > 0 && <QnA quizData={quiz} />
            }
            </Fragment>  
    )
}

export default QuizPage;
