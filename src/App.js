import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LineChart from './components/LineChart2';
import FormComponent2 from './components/FormComponent2';
import { Chart as ChartJS } from 'chart.js/auto';

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Weight',
        data: [],
        backgroundColor: ['blue'],
        borderWidth: '2',
        borderColor: 'black',
      },
    ],
  });

  function addUserData(obj) {
    setData((prevArray) => [...prevArray, obj]);
  }

  useEffect(() => {
    // Update userData whenever data changes
    setUserData({
      labels: data.map((obj) => obj.Date),
      datasets: [
        {
          label: 'Weight',
          data: data.map((obj) => obj.Weight),
          backgroundColor: ['blue'],
          borderWidth: '2',
          borderColor: 'black',
        },
      ],
    });
  }, [data]);

  

  return (
    <div className='container pt-5 pb-5'>
      {/* ROW-1 */}
      <div className='row '>
       <div className='col-12'>
       <h1 className='text-center'>Weightloss Tracker</h1>
       </div>
      </div>
      {/* ROW-2 */}
      <div className='row justify-content-center'>
        <div className='col-6 '>
          <FormComponent2 addUserData={addUserData} />
        </div>
      </div>
      {/* ROW-3 */}
      <div className='row'>

        <div className='col-12'>
        <LineChart chartData={userData} />
        </div>

        
      </div>
    </div>
  );
}

export default App;
