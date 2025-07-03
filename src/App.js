import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import './App.css';
import Add_cust from './Pages/Add_cust';
import Cust_list from './Pages/Cust_list';
import Cust_dele from './Pages/Cust_dele';
import Cust_edit from './Pages/Cust_edit';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Add_cust/>}></Route>
            <Route path='/list' element={<Cust_list/>}></Route>
            <Route path='/list/delete/:deleteId' element={<Cust_dele/>}></Route>
            <Route path='/list/edit/:editId' element={<Cust_edit/>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
