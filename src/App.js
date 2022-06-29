import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Home, PrivacyPage } from './pages';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/privacypolicy' element={<PrivacyPage />}></Route>
          </Routes>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
