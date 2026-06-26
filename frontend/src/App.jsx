import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './page/Home';
import ProductList from './page/ProductList';
import CardDetails from './page/CardDetails';
import Mycart from './page/Mycart';
import  Sidebar  from './component/Sidebar';
import { useGlobal } from './Context/context';
const App = () => {
   const { showsidebar } = useGlobal();
  return (
    <>
      
      <Router>
        <Navbar/>
        {showsidebar && <Sidebar/>}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ProductList' element={<ProductList/>}/>
             <Route path='/ProductList/CardDetails/:id' element={<CardDetails/>}/>
            <Route path='/Mycart' element={<Mycart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App