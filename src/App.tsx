import React from 'react';
import Header from './Layout/Header/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header /> 
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
