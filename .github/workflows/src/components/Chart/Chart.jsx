import React,{useState,useEffect} from 'react';
import {fetchDailydata } from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Charts=({data:{confirmed,deaths,recovered},country})=>{
const [dailydata,setDailyData]=useState([]);

useEffect(()=>{
const fetchAPI=async()=>{
    setDailyData(await fetchDailydata());
}
fetchAPI();

},[]);

const lineChart=(
    dailydata.length!=0
    ?(<Line
        data={{
            labels:dailydata.map(({date})=>date),
            datasets:[{
                data:dailydata.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
                            },
            {
                data:dailydata.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255, 0, 0, 0.5)',
                fill:true,
            }],
    }}
      /> ):null
);

const barChart=(
    confirmed
    ?(
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rgba(230, 86, 2, 0.678)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(4, 4, 43, 0.5)',
                ],
                data:[confirmed.value,recovered.value,deaths.value]
            }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current state in ${country}`},
        }}
        />
    ):null
);
    return(
    <div className={styles.container}>
        {country?barChart:lineChart}
        </div>
    )
}

export default Charts;
