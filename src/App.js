import { useEffect,useState } from 'react';
import Tours from './Tours';
import './App.css';

function App() {

  const [tours, setTours] = useState([]);
  const [loading,setLoading]=useState(true);
  
  async function fetchPagesAPI() {
    const data = await fetch("http://localhost:3000/tours");
    const response = await data.json();
    setLoading(false);
    setTours(response);
    
  }
  useEffect(() => {
    fetchPagesAPI();
  }, [])
  console.log(tours);
  function removeTours(id){
   const filtered=tours.filter((tour)=>tour.id !== id)
   setTours(filtered)
  }
  if( tours.length===0 ) {
    return( <button onClick={ fetchPagesAPI }>Show Tours</button>)   
  }
  return (
    <div className="title">
      <main >
        {loading ? "Loading..." : <Tours tours={tours} removeTours={removeTours}/>} 
      </main>
    </div>
  );
}

export default App;
