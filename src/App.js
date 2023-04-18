import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  });
  return (
    <div className='App'>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
