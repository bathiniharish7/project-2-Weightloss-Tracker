
import './App.css';
import LineChart from './components/LineChart';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import FormComponent from './components/FormComponent';

function App() {


  const data = useSelector((state)=>state.UserSlice)

  const userDetails ={
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
    }

  

  // return (
  //   <div className='container pt-5 pb-5'>
  //     {/* ROW-1 */}
  //     <div className='row '>
  //      <div className='col-12'>
  //      <h1 className='text-center'>Weightloss Tracker</h1>
  //      </div>
  //     </div>
  //     {/* ROW-2 */}
  //     <div className='row justify-content-center'>
  //       <div className='col-sm-12 col-md-10 col-lg-8 col-xl-8'>
  //        <FormComponent/>

  //       </div>
  //     </div>
  //     {/* ROW-3 */}
  //     <div className='row'>

  //       <div className='col-12 '>
  //       <LineChart chartData={userDetails}  />
  //       </div>

        
  //     </div>
  //   </div>
  // );
  return (
    <div className='container  pt-5 pb-5'>
      {/* ROW-1 */}
      <div className='row '>
       <div className='col-12'>
       <h1 className='text-center'>Weightloss Tracker Using Redux-Toolkit</h1>
       </div>
      </div>
      {/* ROW-2 */}
      <div className='row justify-content-center align-items-center m-3'>
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
         <FormComponent/>
        </div>
        <div className='mt-4 px-0 col-12 col-md-12 col-lg-8 col-xl-8 order-1 m-lg-0' style={{height:'400px'}}>
        <LineChart chartData={userDetails}/>
        </div>
      </div>
      {/* ROW-3 */}

     
     
    </div>
  );
}

export default App;
