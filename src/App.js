import logo from './logo.svg';
import './App.css';
import Formcomponent from './components/Formcomponent';
import Header from './components/Header';
import Formcomponentwithstate from './components/Formcomponentwithstate';
import Useeffectcomponent from './components/Useeffectcomponent';
import Home from './components/Home';
import {BrowserRouter as Router, Switch,Route,Link, Routes} from 'react-router-dom'
import About from './components/About';
import Products from './components/Products';
import Errorpage from './components/Errorpage';
import Contact from './components/Contact';
import { Facebook } from './components/Facebook';
import { Insta } from './components/Insta';
import { Google } from './components/Google';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {/* <Formcomponent/> */}
        {/* <Formcomponentwithstate/> */}
        {/* <Useeffectcomponent/> */}
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}>
            <Route path='facebook' element={<Facebook/>}/>
            <Route path='insta' element={<Insta/>}/>
            <Route path='google' element={<Google/>}/>
          </Route>
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
