import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import LoginSignUp from "./Components/LoginSignup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';



function Dashboard() {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />      

      <div className="background"></div>
    </div>
  );
}

function App() {
    return(
        <Router >
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/About' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/login' element={< LoginSignUp />}></Route>
                <Route exact path='/dashboard' element={< Dashboard />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
