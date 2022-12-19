import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Aboutpage from './components/Aboutpage';
import Eventcard from './components/Eventcard';
import Mappage from './components/Mappage';
import Showallevents from './components/Showallevents';
import Addevent from './components/Addevent';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/mappage' element={<Mappage />} />
          <Route path='/aboutpage' element={<Aboutpage />} /> 
          <Route path='/addevent' element={<Addevent />} />
           <Route path='/allevents' element={<Showallevents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;