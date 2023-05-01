import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import LoginSignUp from "./Components/LoginSignup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

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
                <Route exact path='/' element={< LoginSignUp />}></Route>
                <Route exact path='/dashboard' element={< Dashboard />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
