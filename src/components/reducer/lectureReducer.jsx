export const lectureReducer = (state, {type, payload})=> {
         switch(type){
            case "SET_LINK": return{
                ...state,
                link: payload
            }
            case "SET_LECTURES": return {
                 ...state,
                 lecture: [ ...payload]
            }
            case "SET_TITLE" : return {
                ...state,
                title: payload
            }
            case "SET_IMAGE": return {
                ...state,
                image: payload
            }
            case "SET_DESCRIPTION": return {
                ...state,
                description: payload
            }
            default :return state
         }
}