import { GET_FINANCIAL,POST_FINANCIAL} from '../actionType';
import axios from 'axios';
export const addFinancial = (financial)=>(dispatch)=>{
    axios.post('https://sheet.best/api/sheets/450c0724-e6dc-407f-81a7-c5ac0c2b34e0',financial)
    .then((data)=>{
        dispatch({
            type:POST_FINANCIAL,
            payload:data
        })
    })
}
export const getAllFinancial = ()=>(dispatch)=>{
    axios.get('https://sheet.best/api/sheets/450c0724-e6dc-407f-81a7-c5ac0c2b34e0')
    .then(data=>{
        dispatch({
            type:GET_FINANCIAL,
            payload:data
        })
    })
}