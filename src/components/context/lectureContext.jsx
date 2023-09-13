import { createContext, useContext, useReducer } from "react"
import { lectureReducer } from "../reducer/lectureReducer";


const initialState = {
    lecture: [],
    link:"",
    image: "",
    description: "",
    select: false,
}

const LectureContext = createContext();

const LectureProvider = ({children})=> {
    const [{lecture, link, image, description, select} , lectureDispatch] = useReducer(lectureReducer, initialState);
    return(
        <LectureContext.Provider value={{lecture, link, image, description, select,lectureDispatch}}>
          {children}
        </LectureContext.Provider>
    )
}

const useLecture =()=> useContext(LectureContext);

export {LectureProvider, useLecture}