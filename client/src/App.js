import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signin' element = {<Signin/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
