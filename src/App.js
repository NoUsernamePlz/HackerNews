import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Blogpage from './pages/Blog/Blogpage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/post/:id' element={<Blogpage/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
