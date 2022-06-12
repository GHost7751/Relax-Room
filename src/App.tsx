import React from 'react';
import Header from './Layout/Header/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import { Movie } from './Components/Movie/Movie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/movie' element={<Movie />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
