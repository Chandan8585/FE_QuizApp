import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import CategoryCard from '../../components/CategoryCard';
import "./Home.css"
const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
    (async ()=> {
        try {
            const {data: {data}} = await axios.get("https://express-sgam.onrender.com/category");
            console.log(data);
             setCategory(data);
             
        } catch (error) {
          console.log(error);   
        }
    })()
    }, [])
  return (
    <div>
        <Navbar/>
        <div className="category-card">
            {
                category.map((category)=> {
                    return(
                        <CategoryCard quiz={category} key={category.id}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home