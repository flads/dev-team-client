import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/levels/Levels';
import Users from './pages/users/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="levels" element={<Levels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
