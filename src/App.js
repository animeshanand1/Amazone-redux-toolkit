import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  
  return (
    <Router>
    <div className="App">
   
      <Routes>
       
      <Route path='/' element={[<Header/>,<Home/>]}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
