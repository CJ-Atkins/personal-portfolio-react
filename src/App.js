import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, PrivacyPage } from './pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/privacypolicy' element={<PrivacyPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
