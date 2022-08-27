
import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux';
  
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  
  import {LocationChartData} from '../features/Member/memberAcition'
  import './style.css';
  
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  
  
  const QualificationChart =()=>{
      const disbatsh = useDispatch();
      const {locationData}=useSelector(state => state.members.data)
      useEffect(()=>{
          disbatsh(LocationChartData())
      },[])
      console.log(locationData)
      return(
          <div className='location-chart'>
              <Doughnut  data={{
                              labels:locationData.labels,
                              datasets: [
                                  {
                                  label: 'location Summary',
                                  data: locationData.chartData,
                                  backgroundColor: [
                                      'rgba(255, 99, 132, 0.2)',
                                      'rgba(54, 162, 235, 0.2)',
                                      'rgba(255, 206, 86, 0.2)',
                                      'rgba(75, 192, 192, 0.2)',
                                      'rgba(153, 102, 255, 0.2)',
                                      'rgba(255, 159, 64, 0.2)',
                                  ],
                                  borderColor: [
                                      'rgba(255, 99, 132, 1)',
                                      'rgba(54, 162, 235, 1)',
                                      'rgba(255, 206, 86, 1)',
                                      'rgba(75, 192, 192, 1)',
                                      'rgba(153, 102, 255, 1)',
                                      'rgba(255, 159, 64, 1)',
                                  ],
                                  borderWidth: 1,
                                  },
                              ],
                              }
              } />
          </div>
      )
  }
  

export default QualificationChart