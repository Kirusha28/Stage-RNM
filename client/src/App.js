import './App.css';
//import {useEffect, useState } from 'react';
import ProductGet from './components/getProduct/product'
import Add from './components/addProduct/createProduct';
import { useState } from 'react';

function App() {
  const [createModal, setCreateModal] = useState(false);

  return(
  <>
    {!createModal ? 
    <button onClick={() => setCreateModal(true)} className='Btn-open create'>+</button> : 
    <button onClick={() => setCreateModal(false)} className='Btn-close create'>х</button>}
    {createModal && <Add/>}
    
    <ProductGet/>
  </>
  
  
  )
}

export default App;
