import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Aboutpage from './components/Aboutpage';
import Eventcard from './components/Eventcard';
import Mappage from './components/Mappage';
import Showallevents from './components/Showallevents';
import Addevent from './components/Addevent';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Showallevents />} />
          {/* <Route path='/mappage' element={<Mappage />} />
          <Route path='/aboutpage' element={<Aboutpage />} /> */}
          <Route path='/addevent' element={<Addevent />} />
          {/* <Route path='/show-event/:id' element={<Showallevents />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;