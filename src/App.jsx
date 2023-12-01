import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import FormPage from "./views/FormPage";
import NotFound from "./views/NotFound";
import './App.css'

function App() {


  return (
    <>
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<FormPage />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
