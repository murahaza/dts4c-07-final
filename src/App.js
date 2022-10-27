import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { AuthProvider } from "./context/AuthContext";
import { Dashboard } from './pages';
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";


function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/detailnews" element={<DetailNews />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

const DetailNews = () => {
  return (
    <div>this is page detail news</div>
  )
}
