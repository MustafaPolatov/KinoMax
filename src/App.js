import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Home } from './screen/Home';
import { Info } from './screen/Info';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/info" element={<Info/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
