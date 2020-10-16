import React, { useState, useEffect } from 'react';
import {Pie} from 'react-chartjs-2';

const NewChart = () => {
    const [chartData, setChartData] = useState({})
/*
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState({});
    const [employeeAge, setEmployeeAge] = useState({});

    const chart = () => {
        let empSal = [];
        let empAge = [];
        Axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => {
                console.log(res)
                for(const dataObj of res.data.data){
                    empSal.push(parseInt(dataObj.employee_salary))
                    empAge.push(parseInt(dataObj.employee_age))
                }
                setChartData({
                    //labels: ['Eat out', 'Rent', 'Grocery', 'Monthly General Investment', 'Gas', 'Monthly Savings Investment', 'Monthly Student Loans'],
                    labels: empAge,
                    datasets: [
                        {
                            label: 'Amount of Weekly Funds in Dollars',
                            //data: [25, 375, 110, 25, 40, 110, 250],
                            data: empSal,
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
                });
            })
            .catch(err => {
                console.log(err)  
            });
            console.log(empSal, empAge);


    }; */    

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