
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {

  const [details,setDetails] = useState({"YearBuilt":0, "TotalBath": 0, "BedroomAbvGr": 0, "YearRemodAdd" : 0});
  const [pred,setPrediction] = useState("");

  function getPred(){
    // POST request using axios inside useEffect React hook
    const article = {"YearBuilt":1990, "TotalBath": 1, "BedroomAbvGr": 5, "YearRemodAdd" : 2000};
    axios.post('http://127.0.0.1:8000/predict', details)
        .then(response => setPrediction(response.data.prediction));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  function handleChange(event) {
    const {name, value} = event.target;
    setDetails(prev => {
        return {
            ...prev,
            [name]: value
        };
    });
  
  }




  return (
    <div className="App">
      <h1>House Price Predictor</h1>
      <p>Enter house details</p>
      <form>
        <input onChange={handleChange} name="YearBuilt" type="text" placeholder="YearBuilt"></input>
        <input onChange={handleChange} name="TotalBath" type="text" placeholder="TotalBath"></input>
        <input onChange={handleChange} name="BedroomAbvGr" type="text" placeholder="BedroomAbvGr"></input>
        <input onChange={handleChange} name="YearRemodAdd" type="text" placeholder="YearRemodAdd"></input>
        </form>
        <button onClick={getPred}>Send</button>
      
      {/* <button onClick={()=>setPrediction(3)} type="submit">Send</button> */}
      <div>
        <h2>Aproximate price:</h2>
        <div>
         <p>{pred}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
