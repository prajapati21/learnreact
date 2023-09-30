
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Homepage from "./Component/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

const App = () =>{
  const design = (
    <>
    <Router>
    <Header/>
      <Routes>
        < Route path= "/" element={<Homepage/>}/>
        < Route path= "/Blog" element={<h1>Welcome to Blog</h1>}/>
        < Route path= "/Website" element={<h1>Welcome to Website </h1>}/>
        < Route path= "/Team" element={<h1>Welcome to Team </h1>}/>
        < Route path= "/Contact" element={<h1>Welcome to Contact </h1>}/>
        < Route path= "/Images" element={<h1>Welcome to Images </h1>}/>
      </Routes>
    </Router>
    </>
  );
  return design;
}

export default App;