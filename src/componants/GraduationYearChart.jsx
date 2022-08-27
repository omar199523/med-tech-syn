
import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux';
  
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  
  import {graduationChartData} from '../features/Member/memberAcition'
  import './style.css';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  
  const GraduationYearChart =()=>{
      const disbatsh = useDispatch();
      const {graduationData}=useSelector(state => state.members.data)
      useEffect(()=>{
          disbatsh(graduationChartData())
      },[disbatsh])
      
      return(
          <div className='graduation-chart'>
              <Bar  data={{
                              labels:graduationData.labels,
                              datasets: [
                                  {
                                  label: 'Graduation Year Summary',
                                  data: graduationData.chartData,
                                  backgroundColor: [
                                      'rgba(255, 99, 132, 0.2)',
                                      
                                  ],
                                  borderColor: [
                                      'rgba(255, 99, 132, 1)',
                                      
                                  ],
                                  borderWidth: 1,
                                  },
                              ],
                              }
              } />
          </div>
      )
  }
  

export default GraduationYearChart