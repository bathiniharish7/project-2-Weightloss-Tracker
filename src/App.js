import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import { useState } from 'react';
import { UserData } from './Data';

import {chartJS} from 'react-chartjs-2'
import LineChart from './components/LineChart2';
function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map(data=>data.year),
    datasets:[
      {
        label:"User gained",
        data:UserData.map(data=>data.userGain),
        backgroundColor:["blue"],
        borderWidth:'2',
        borderColor:'black'
      }
    ]
  })
  return (
   <div className='container bg-warning'>

    <div className='row'>
      <h1 className='text-center'>Weightloss Tracker</h1>
    </div>

    <div className='row justify-content-center'>
      <button className='btn bg-primary text-light w-50'>Add weight</button>
    </div>

    <div className='row'>

      <BarChart chartData={userData}/>

    </div>

    <div>
      <LineChart chartData={userData}/>
    </div>
    
   


   </div>
  );
}

export default App;
