import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  {
    "id": 1,
    "name": "Ayaan Rahman",
    "class": "10",
    "math": 85,
    "english": 78,
    "science": 92,
    "history": 74,
    "computer": 88
  },
  {
    "id": 2,
    "name": "Meherin Akter",
    "class": "10",
    "math": 90,
    "english": 83,
    "science": 95,
    "history": 80,
    "computer": 91
  },
  {
    "id": 3,
    "name": "Rafiul Hasan",
    "class": "10",
    "math": 76,
    "english": 69,
    "science": 81,
    "history": 72,
    "computer": 77
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "class": "10",
    "math": 88,
    "english": 85,
    "science": 90,
    "history": 79,
    "computer": 86
  },
  {
    "id": 5,
    "name": "Tareq Ahmed",
    "class": "10",
    "math": 67,
    "english": 74,
    "science": 70,
    "history": 65,
    "computer": 72
  },
  {
    "id": 6,
    "name": "Sumaiya Islam",
    "class": "10",
    "math": 93,
    "english": 88,
    "science": 96,
    "history": 85,
    "computer": 94
  },
  {
    "id": 7,
    "name": "Fahim Khan",
    "class": "10",
    "math": 79,
    "english": 75,
    "science": 82,
    "history": 70,
    "computer": 80
  },
  {
    "id": 8,
    "name": "Mim Chowdhury",
    "class": "10",
    "math": 84,
    "english": 90,
    "science": 89,
    "history": 87,
    "computer": 92
  },
  {
    "id": 9,
    "name": "Arif Mahmud",
    "class": "10",
    "math": 72,
    "english": 68,
    "science": 75,
    "history": 70,
    "computer": 73
  },
  {
    "id": 10,
    "name": "Jannat Hossain",
    "class": "10",
    "math": 95,
    "english": 91,
    "science": 97,
    "history": 88,
    "computer": 99
  }
]



const ResultsChart = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={resultData} >
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line stroke='#564598' dataKey={"history"}></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;