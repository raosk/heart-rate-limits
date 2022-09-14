import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  function calculate() {
    setUpperLimit((220 - age) * 0.85);
    setLowerLimit((220 - age) * 0.65);
  }

  return (
    <div id="container">
      <form onSubmit={e => { e.preventDefault(); }}>
        <h3>Heart rate limits calculator</h3>

        <div>
          <label>Age</label>
        </div>
        <div>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>

        <div>
          <label>Heart rate limits</label>
        </div>
        <div>
          <output id="result-box">{lowerLimit.toFixed(0)}-{upperLimit.toFixed(0)}</output>
        </div>

        <div>
          <button type="button" onClick={calculate}>Calculate</button>
        </div>

      </form>
    </div>
  );
}

export default App;
