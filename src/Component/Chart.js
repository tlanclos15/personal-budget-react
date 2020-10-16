import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';

const NewChart = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of fillertext',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4    
                }
            ]
        })
    }

    useEffect(() => {
        chart()    
    }, [])
    return(
        <div className="App">
            <h1>NewChart</h1>
            <div>
                <Line data={chartData}/>
            </div>
        </div>
    )
}

export default NewChart;