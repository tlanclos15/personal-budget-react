import React, { useState, useEffect } from 'react';
import {Pie} from 'react-chartjs-2';

const NewChart = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['Eat out', 'Rent', 'Grocery', 'Monthly General Investment', 'Gas', 'Monthly Savings Investment', 'Monthly Student Loans'],
            datasets: [
                {
                    label: 'Amount of Weekly Funds in Dollars',
                    data: [25, 375, 110, 25, 40, 110, 250],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(20, 192, 192, 0.6)',
                        'rgba(50, 192, 192, 0.6)',
                        'rgba(75, 150, 192, 0.6)',
                        'rgba(75, 100, 192, 0.6)',
                        'rgba(75, 192, 150, 0.6)',
                        'rgba(75, 192, 100, 0.6)'
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
            <h1>Amount of Weekly Funds in Dollars</h1>
            <div>
                <Pie data={chartData}/>
            </div>
        </div>
    )
}

export default NewChart;