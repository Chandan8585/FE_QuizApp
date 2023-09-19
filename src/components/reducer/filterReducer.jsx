export const filterReducer = (state, { type, payload }) => {
    switch(type){
        case "Filter_CATEGORY":
            return {
              ...state,
              category: payload
            };
        case "SEARCH_FILTER":
            return {
                ...state,
                search : payload
            }
        case "CLEAR_CATEGORY":
            return {
                ...state,
                category: "all"
            }
        default: return state;
}
}