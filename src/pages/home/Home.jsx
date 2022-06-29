import React from 'react';
import { Navbar, Footer, About, Projects } from '../../containers';

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
