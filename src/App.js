import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addemployee from './components/Addemployee';
import Viewall from './components/Viewall';
import Searchemployee from './components/Searchemployee';

function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addemployee/>}/>
  <Route path='/Viewall' element={<Viewall/>}/>
  <Route path='/Searchemployee' element={<Searchemployee/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
