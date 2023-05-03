import { useEffect,useState } from 'react';
import Tours from './Tours';
import './App.css';

function App() {

  const [tours, setTours] = useState([]);
  async function fetchPagesAPI() {
    const data = await fetch("http://localhost:3000/tours");
    const response = await data.json();
    setTours(response);
  }
  useEffect(() => {
     fetchPagesAPI();
  }, [])
  console.log(tours);


  return (
    <div className="App">
      <header className="App-header">
        <Tours tours={tours} />
      </header>
    </div>
  );
}

export default App;
