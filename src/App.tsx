import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/levels/Levels';
import Developer from './pages/developers/Developers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="developers" element={<Developer />} />
          <Route path="levels" element={<Levels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
