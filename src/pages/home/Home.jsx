import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import "./Home.css"
import QuizCard from '../../components/quizCard/QuizCard';
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
    (async ()=> {
        try {
            const {data: {data}} = await axios.get("https://express-sgam.onrender.com/category");
            console.log(data);
             setCategories(data);
             setLoading(false)
             
        } catch (error) {
          console.log(error);
          setLoading(false)   
        }
    })()
    }, [])
  return (
    <div>
        <Navbar route="home"/>
        <main className="category-card">
            {
               loading ? (
                <h1 className='loading'>Loading... this can take upto 10 seconds so please be pateint and refresh in between</h1>
               ): (
               categories.map((category)=> {
                    return(
                        <QuizCard quizCategory={category} key={category.id}/>
                    )
                })
               )
        

            }
        
        </main>
    </div>
  )
}

export default Home
