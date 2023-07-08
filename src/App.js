import './App.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Sign from './pages/Sign';
import { CartProvider } from './components/Context';

function App() {
  return (
    <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path ="/" element={<Home/>} />
          <Route exact path ="/login" element={<Login/>} />
          <Route exact path ="/ahaaram/src/pages/Sign.js" element={<Sign/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
    
  );
}

export default App;
