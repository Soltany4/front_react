import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {


  const [employee, setEmployee] = useState([])

  useEffect(() => {
    getEmployee()
  },[])

  const getEmployee = async () => {
    const res = await axios.get('http://localhost:8080/employee')
    setEmployee(res.data)
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element= {<Home employee={employee} setEmployee={setEmployee} />}/>
          <Route path='/add' element={<AddEdit employee={employee} setEmployee={setEmployee}/>}/>
          <Route path='/update/:id' element={<AddEdit employee={employee} setEmployee={setEmployee}/>}/>
          <Route path='/view/:id' element={<View employee={employee}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
