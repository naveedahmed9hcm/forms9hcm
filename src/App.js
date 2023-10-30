import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from "./component/Form";
import Formtwo from "./component/Formtwo";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
  <>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Form/>}></Route>
    <Route path='Formtwo' element={<Formtwo/>}></Route>
   </Routes>
   </BrowserRouter>
 </>


  );
}

export default App;
