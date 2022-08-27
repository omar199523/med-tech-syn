import { GET_FINANCIAL,POST_FINANCIAL} from '../actionType';

const  initialState ={
    financials:[],
     loading:false,
     editStatus:false,
 }

 const reduser=(state = initialState,action)=>{
     switch(action.type){
         case GET_FINANCIAL:
            return {
                 ...state,
                 persons:action.payload,
                 loading:false
             }
        case POST_FINANCIAL:
            return {
                 ...state,
                 financials:[...state.financials ,action.payload]
                 
             }
        default:
            return {
                ...state
            }
    }
}
export default reduser;