import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,FETCH_USERS_FAIL} from "../actions/actionTypes"
const initialState ={ 
    users:[],
    error:'',
    isLoading:false
} 



const usersReducer = (state = initialState, action) => {
    //   if(action.type ==="BUY_LAPTOP"){
    //       return {numOfLaptops:state.numOfLaptops}
    //   }else{
    //       return state; 
    //   } 
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, isLoading: true }

        case FETCH_USERS_SUCCESS:
            return { isLoading: false, users: action.data, error: '' }

        case FETCH_USERS_FAIL:
            return { isLoading: false, users: [], error: action.data }


        default:
            return state;
  }

} 
export default usersReducer;