export const lectureReducer = (state, {type, payload})=> {
         switch(type){
            case "SET_LINK": return{
                ...state,
                link: payload
            }
            case "SET_LECTURES": return {
                 ...state,
            }
            default :return state
         }
}