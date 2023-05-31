import './App.css';
import './components/Formm.css';
import { NavBar } from './components/NavBar';
import{Banner} from  './components/Banner';
import  Form  from './components/Formm';
import 'bootstrap/dist/css/bootstrap.min.css'
import Comms from "./components/Community";

function App() {
  return (
  <div className='App'>
    <NavBar />
    <Banner/>
    <Comms/>
    <Form/>
    </div>

  );
}

export default App;
