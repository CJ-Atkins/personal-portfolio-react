import './App.css';
import { Navbar, Footer, About, Projects } from './containers';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
