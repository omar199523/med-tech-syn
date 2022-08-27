import { GET_MEMBER,POST_MEMBER,LOCATION_CHART_DATA,GRADUATION_YEAR_CHART_DATA} from '../actionType';
import axios from 'axios';
import data from './data.json'
export const addMember = (member)=>(dispatch)=>{
    axios.post('https://sheet.best/api/sheets/fd20fbcc-3578-4acb-9c05-aac82feef1a0',member)
    .then((data)=>{
        dispatch({
            type:POST_MEMBER,
            payload:data
        })
    })
}
export const graduationChartData =()=>(dispatch)=>{
    // axios.get('https://sheet.best/api/sheets/a2326304-d2c0-4f98-a2b8-1704effe3f62')
    // .then((data)=>{
    //     const graduation = data.map((member)=>{
    //     return member.graduationYear
    //     })
    //     const labels = [...new Set(graduation)]
    //     const chartData = labels.map((label)=>{
    //         return graduation.filter(item=>{
    //              return label === item
    //         }).length;
    //     })
    //     dispatch({
    //         type:GRADUATION_YEAR_CHART_DATA,
    //         payload:{
    //             labels,
    //             chartData,
    //         }
    //   })
    // })
    
    const graduation = data.map((member)=>{
                return member.graduationYear
    })
    const labels = [...new Set(graduation)]
    const chartData = labels.map((label)=>{
        return graduation.filter(item=>{
            return label === item
        }).length;
    })
    dispatch({
        type:GRADUATION_YEAR_CHART_DATA,
        payload:{
            labels,
            chartData,

        }
    })
    
}

export const LocationChartData =()=>(dispatch)=>{
    // axios.get('https://sheet.best/api/sheets/a2326304-d2c0-4f98-a2b8-1704effe3f62')
    // .then((data)=>{
    //     const locatin = data.map((member)=>{
    //     return member.qualification
    //     })
    //     const labels = [...new Set(locatin)]
    //     const chartData = labels.map((label)=>{
    //         return locatin.filter(item=>{
    //              return label === item
    //         }).length;
    //     })
    //     dispatch({
    //         type:LOCATION_CHART_DATA,
    //         payload:{
    //             labels,
    //             chartData,
    //         }
    //   })
    // })
    
    const locatin = data.map((member)=>{
                return member.qualification
    })
    const labels = [...new Set(locatin)]
    const chartData = labels.map((label)=>{
        return locatin.filter(item=>{
            return label === item
        }).length;
    })
    dispatch({
        type:LOCATION_CHART_DATA,
        payload:{
            labels,
            chartData,

        }
    })
    
}
export const getAllMember = ()=>(dispatch)=>{
    // axios.get('https://sheet.best/api/sheets/51ad249d-fea8-4d73-940e-36352aad973c')
    // .then(data=>{
    //     dispatch({
    //         type:GET_MEMBER,
    //         payload:data
    //     })
    // })
    const members = data.map((member,index)=>{
        return {
            key:index,
            ...member
        }
    })
    dispatch({
        type:GET_MEMBER,
        payload:members
    })
}

