// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import Signup from './component/Signup';
import {Link,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Signup">Signup</Link>

      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;



