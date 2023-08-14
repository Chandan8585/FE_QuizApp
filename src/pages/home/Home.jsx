import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import "./Home.css"
import QuizCard from '../../components/quizCard/QuizCard';
const Home = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
    (async ()=> {
        try {
            const {data: {data}} = await axios.get("https://express-sgam.onrender.com/category");
            console.log(data);
             setCategories(data);
             
        } catch (error) {
          console.log(error);   
        }
    })()
    }, [])
  return (
    <div>
        <Navbar route="home"/>
        <main className="category-card">
            {
                categories.map((category)=> {
                    return(
                        <QuizCard quizCategory={category} key={category.id}/>
                    )
                })
            }
        </main>
    </div>
  )
}

export default Home
