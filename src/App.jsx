import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sucursales from "./pages/Sucursales"

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <Header />
        
        {/* El centro de la página cambia dinámicamente según la URL */}
        <main className="flex-1">
          <Routes>
            {/* Si estás en la raíz (http://localhost:5173/), muestra el Home */}
            <Route path="/Sucursales" element={<Sucursales />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </>
  )
}
export default App
