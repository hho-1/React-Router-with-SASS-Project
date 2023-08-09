
import './scss/main.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Error from './components/error/Error';




function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
