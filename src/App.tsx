import React from 'react';
import Header from './Layout/Header/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import { Movie } from './Components/Movie/Movie';
import {Series} from '../src/Components/Series/Series'
import {Todo} from './Components/Todos/Todo';
import { Games } from '../src/Components/Games/Games'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/series' element={<Series />} />
            <Route path='/games' element={<Games />} />
            <Route path='/todo' element={<Todo /> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
