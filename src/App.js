
import React, { useState } from 'react'
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('there is no message');

  const CaclBMI = (e) => {
    e.preventDefault();

    if(weight === 0 || height === 0){
      alert('Please enter a valid weight and height')
    } else {
      const bmi = (weight / (height*height))
      setBmi(bmi.toFixed(1));

      if(bmi<18.5) {
        setMessage('you are underweight')
      }else if(bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are an overweight')
      }
    }

  }

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={CaclBMI}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
