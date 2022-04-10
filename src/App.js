import Person from './components/register';
import Login from './components/login';
import About from './components/about';
import Settings from './components/settings';
import {useNavigate} from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';
import './App.css';
const app = initializeApp(firebaseConfig);

function App() {
  const navigate = useNavigate()
  const demoHandler = () => {
    navigate("/login")
  }

  return (

    <>

<div onClick={demoHandler}></div>

</>

  );
}

export default App;
