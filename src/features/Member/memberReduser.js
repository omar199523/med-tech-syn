import { GET_MEMBER,POST_MEMBER,LOCATION_CHART_DATA,GRADUATION_YEAR_CHART_DATA} from '../actionType';

const  initialState ={
    members:[],
    loading:false,
    editStatus:false,
    data:{
        locationData:{},
        graduationData:{}
    },
 }

 const reduser=(state = initialState,action)=>{
     switch(action.type){
         case GET_MEMBER:
            return {
                 ...state,
                 members:action.payload,
                 loading:false
             }
        case POST_MEMBER:
            return {
                 ...state,
                 members:[...state.members ,action.payload]
                 
             }
        case LOCATION_CHART_DATA:
            return {
                 ...state,
                 data:{...state.data,locationData:action.payload}
                 
        }
        case GRADUATION_YEAR_CHART_DATA:
            return {
                 ...state,
                 data:{...state.data,graduationData:action.payload}
                 
        }
        default:
            return {
                ...state
            }
    }
}
export default reduser;