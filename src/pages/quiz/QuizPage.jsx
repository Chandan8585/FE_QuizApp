import React, { Fragment, useEffect} from 'react'
import axios from "axios"
import Navbar from '../../components/Navbar'
import QnA from '../../components/questionsAndOptions/QnA'
import { useQuiz } from '../../components/context/quiz-context'

const QuizPage = () => {
    const { quizCategory, quiz , quizDispatch } = useQuiz();

    useEffect(() => {
        ( async() => {
            try {
                const { data} = await axios.get("https://wicked-plum-sea-urchin.cyclic.cloud/quiz"
                ,{
                    headers: {authorization : localStorage.getItem("token")},
                });
                console.log("from quiz");
                console.log("data",data);
                const filteredData =data && data.length>0 && data.filter(({category})=> category === quizCategory);
               
                if(filteredData && filteredData.length>0){
                    quizDispatch({
                        type: "SET_QUIZ",
                        payload: filteredData
                    });
                    localStorage.setItem("quiz", JSON.stringify(filteredData));
                }
}
             catch (error) {
                console.log(error);
            }
        })()
    }, []); 

    return (    

            <Fragment>
            <Navbar route="quiz"/>
            { quiz && quiz.length > 0 && <QnA quizData={quiz} />
            }
            </Fragment>  
    )
}

export default QuizPage;
