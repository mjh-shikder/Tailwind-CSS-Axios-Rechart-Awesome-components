import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    console.log(marksData);
    
    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            english: studentData.marks.english,
            history: studentData.marks.history,
            computer: studentData.marks.computer
        }

        const avg = (student.computer + student.english + student.history) / 3;
        student.avg = avg;


        return student
})

    console.log('dhon',marksChartData);
    

    return (
        <div>
            <BarChart width={1000} height={500} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='yellow'></Bar>
                <Bar dataKey={'english'} fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;