import Constant from '../constants/data'
const reducer = (state = Constant,action)=>{
    if(action.type ==='BOOK_CAR'){
        let listOfCars = [];
            state.data.forEach((car)=>{
            if(car.id === action.carId){
                car.rented = true;
            }
            listOfCars.push(car);
        })

        return{
            ...state,  
          data: listOfCars
        }
    } 
    return state;

}

export default reducer