import './App.css';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
