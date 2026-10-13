import { BrowserRouter, Routes, Route } from "react-router-dom";
// we are importing the pages and components 
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
