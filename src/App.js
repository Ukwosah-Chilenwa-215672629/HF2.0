import './App.css';
import './components/Formm.css';
// import Team from './components/Team'
import { NavBar } from './components/NavBar';
// import{Banner} from  './components/Banner';
import  Form  from './components/Formm';
import Why from './components/Why'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div className='App'>
    <NavBar />
    <Why/>
     {/* <Banner/> */}
    {/* <Team/> */}
    <Form/>

    </div>

  );
}

export default App;
