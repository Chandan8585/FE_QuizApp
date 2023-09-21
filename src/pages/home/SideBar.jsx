import React from 'react'
import "./Home.css"
import { useFilter } from '../../components/context/filterContext'
const SideBar = () => {
const {category, filterDispatch} = useFilter();
    const handleChange = (e)=> {
        filterDispatch({
            type: "Filter_CATEGORY",
            payload: e.target.value
        })
    }
    const handleClear = ()=> {
        filterDispatch({
            type: "CLEAR_CATEGORY"
        })
    }

  return (
    <div className='side-bar'>
     <div className="headers">
        <h3 className='filter'>Filter</h3>
        <p className='clear-btn' onClick={handleClear}>Clear</p>
     </div>
     <h3 className='category'>Category</h3>
     <div className="category-options">
     <div className='option'>
     <label>
          <input
            className="check-box"
            type="radio"
            value="all"
            checked={category === "all"}
            onChange={(e) => handleChange(e)}
          />
          All
        </label>
        </div>
        <div className='option'>
        <label>
        <input type="radio" 
                    className="check-box"
                    value="Computer Science"
                    checked={category === "Computer Science"}
                    onChange={(e) => handleChange(e)}
         />
            Computer science
        
            </label>
       
         </div>
        <div className='option'>
        <label>
        <input type="radio" 
                    className="check-box"
                    value="Frontend Development"
                    checked={category === "Frontend Development"}
                    onChange={(e) => handleChange(e)}
         />
            Frontend</label>
         
        </div>
        <div className='option'>
        <label>
        <input type="radio" 
                    className="check-box"
                    value="Backend Development"
                    checked={category === "Backend Development"}
                    onChange={(e) => handleChange(e)}
         />
        Backend</label>
       
        </div>
      
        <div className='option'>
            
        <label htmlFor="version-control">
        <input type="radio" 
                    className="check-box"
                    value="Version Control"
                    checked={category === "Version Control"}
                    onChange={(e) => handleChange(e)}
         />
        Version Control System</label>
      
        </div>
        <div className='option'>
        <label htmlFor="project-management">
        <input type="radio" 
                    className="check-box"
                    value="Project Management"
                    checked={category === "Project Management"}
                    onChange={(e) => handleChange(e)}
         />
            project-management</label>
        
     </div>
     <div className='option'>
   
        <label htmlFor="frameworks">
        <input type="radio" 
                    className="check-box"
                    value="FrameWork"
                    checked={category === "FrameWork"}
                    onChange={(e) => handleChange(e)}
         />
            Frame Works</label>
     
     </div>
   
     
    </div>
    
    </div>
  )
}

export default SideBar