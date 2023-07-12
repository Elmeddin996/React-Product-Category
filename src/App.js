import './App.css';
import Header from './Companents/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
