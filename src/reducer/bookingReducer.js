const initialState={
    bookings: [
        {
            id:3,
            issueDate:'2020-12-27',
            name:'abcdef',
            phNum:'+911111111111',
            releseDate:'2020-12-31'
        }
    ]
}
const reducer = (state = initialState,action)=>{
    console.log(action.data)
    if(action.type ==='ADD_NEW_BOOKING'){
        console.log(action.data)
        const bookings = state.bookings;
        bookings.push(action.data);
        return{
            ...state,
            bookings:bookings   
        }
    } 
        return state;

}

export default reducer