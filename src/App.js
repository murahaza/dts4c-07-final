import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Dashboard } from './pages';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/detailnews" element={<DetailNews />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

const DetailNews = () => {
  return (
    <div>this is page detail news</div>
  )
}

// function DetailNews(params) {
//   return (
//     <div>this is page detail news</div>
//   )
// }
