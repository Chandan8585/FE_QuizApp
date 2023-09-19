import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";


const initialState = {
    category : "all",
    search : "", 
}

const FilterContext = createContext();
const FilterProvider = ({children})=> {
    const [{search, category}, filterDispatch] = useReducer(filterReducer, initialState);
    return(
<FilterContext.Provider value={{search, category, filterDispatch}}>
     {children}
</FilterContext.Provider>
)}

const useFilter = () => useContext(FilterContext);

export {useFilter, FilterProvider}