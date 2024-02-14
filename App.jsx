import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import NewBook from './NewBook'
import Libraries from './Libraries'
import Update from './Update'
import ListEmployee from './components/ListEmployee'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <ListEmployee></ListEmployee>
     <HomePage/>
     <Routes>
        <Route element={<NewBook></NewBook>} path='/'/>
        <Route element={<Libraries></Libraries>} path='Library'/>
        <Route element={<Update></Update>} path='update/:id'/>
     </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App
