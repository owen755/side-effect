import React from 'react';
import RandomProduct from './components/RandomProduct'; // Adjust the path if you saved it elsewhere
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Random Product</h1>
        <p>Fetching data with useEffect</p>
      </header>
      
      <main className="main-content">
        {/* Here is where we render the component */}
        <RandomProduct />
      </main>
    </div>
  );
}

export default App;