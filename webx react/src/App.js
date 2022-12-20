
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Contactus } from './componentes/Contactus';
import { Enquiry } from './componentes/Enquiry';
import { Feedback } from './componentes/Feedback';
import { About } from './componentes/About';
import { Footer } from './componentes/Footer';
import { Home } from './componentes/Home';
import { Navigation } from './componentes/Navigation';
import { Product } from './componentes/Products';
import { Values } from './componentes/Values';
import { Myacc } from './componentes/Myacc';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes> 
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/values' element={<Values></Values>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/enquiry' element={<Enquiry></Enquiry>}></Route>
        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/Myacc' element={<Myacc></Myacc>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>

     
      {/* <Values></Values> */}
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Feedback></Feedback> */}
      {/* <Enquiry></Enquiry> */}
      {/* <Product></Product> */}
      {/* <Contactus></Contactus> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
