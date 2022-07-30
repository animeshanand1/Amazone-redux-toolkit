import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';


function App() {
  
  return (
    <Router>
    <div className="App">
    <Header/>
      <Routes>
       
      <Route path='/' element={<Home/>}/>
     
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
