import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>House Price Predictor</h1>
      <p>Enter house details</p>
      <form>
        <input type="text" placeHolder="housedet1"></input>
        <input type="text" placeHolder="housedet2"></input>
        <input type="text" placeHolder="housedet3"></input>
        <input type="text" placeHolder="housedet4"></input>
        <button type="submit">Send</button>
      </form>
      <div>
        <h2>Aproximate price:</h2>
        <div>
          --------
        </div>
      </div>
    </div>
  );
}

export default App;
