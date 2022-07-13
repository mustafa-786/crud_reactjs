import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {Routes,Route} from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
 return <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/users' element={ <AllUsers/>}></Route>
    <Route path='/addusers' element={<AddUser/>}></Route>
    <Route path='/edit/:id' element={<EditUser/>}></Route>
  </Routes>
  </>
}


export default App;
