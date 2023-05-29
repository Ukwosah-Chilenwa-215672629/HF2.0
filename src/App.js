import './App.css';
import './components/Formm.css';
import { NavBar } from './components/NavBar';
import{Banner} from  './components/Banner';
import  Form  from './components/Formm';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div className='App'>
    <NavBar />
    <Banner/>

    <Form/>
    </div>

  );
}

export default App;
