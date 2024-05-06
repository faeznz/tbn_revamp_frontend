import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './page/home_page';
import Tes from './page/tes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Tes />} />
          {/* <Route path="blogs" element={<Tes />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
