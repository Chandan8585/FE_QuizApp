import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import "./Home.css"
import QuizCard from '../../components/quizCard/QuizCard';
import SideBar from './SideBar';
import { getFilterByCategory } from '../../../utils/filter-category';
import { useFilter } from '../../components/context/filterContext';
import { getSearchedResults } from '../../../utils/search-results';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const {category, search} = useFilter();
    useEffect(()=>{
    (async ()=> {
        try {
          
            const {data: {data},} = await axios.get("https://wicked-plum-sea-urchin.cyclic.cloud/category");
           
             setCategories(data);
             setLoading(false)
         

        } catch (error) {
          console.log(error);
          setLoading(false)   
        }
    })()
    }, [])

    const FilterByCategory = getFilterByCategory(categories, category);
    const filterBySearch = getSearchedResults(FilterByCategory, search)
  return (
    <div className='home-container'>
      <div className='nav-home'>
      <Navbar route="home"/>
      </div>
        
       <div className='sidebar-category-card d-flex'>
        
        <SideBar/>
        
       <main className="main d-flex wrap gap-md align-center justify-center category-card">
     
            {
               loading ? (
                <h1 className='loading'>Loading... this can take upto 1 minute when rendering 1st time</h1>
               ): (
                filterBySearch.map((category)=> {
                    return(
                        <QuizCard quizCategory={category} key={category.id}/>
                    )
                })
               )
        

            }
        
        </main>
       </div>
  

        <div>
          Footer
        </div>
    </div>
  )
}

export default Home
