import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import FormList from "./components/formList/FormList";
import * as data from './helpers/db.json'
import './App.css'

function App() {

  useEffect(() => {
    localStorage.setItem('marcas', JSON.stringify(data.marcas))
    localStorage.setItem('registros', JSON.stringify(data.registros))
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/formlist" element={<FormList />} />
      </Routes>
    </>
  )
}

export default App
