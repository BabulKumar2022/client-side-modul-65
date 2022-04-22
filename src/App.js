import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='user/add' element={<AddUser></AddUser>}></Route>
       <Route path='update/:id' element={<UpdateUser></UpdateUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
