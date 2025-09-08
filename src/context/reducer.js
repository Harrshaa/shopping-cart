

export const shoppingCartReducer=(state,action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{
                ...state,
                products:action.payload
            }
        case "SAY_HELLO":
            return {
                key: "hello"
            }
        default:
            return state;

    }
}