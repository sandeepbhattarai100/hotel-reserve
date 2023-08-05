
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/Homepage';
import SingleProduct from './pages/singleproduct/SingleProduct';
import NotFound from './pages/NotFound';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
