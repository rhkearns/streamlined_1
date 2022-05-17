import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import ContentBody from './Components/ContentBody/ContentBody'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ContentBody />
      <Testimonials />
      <Contact />
      <About />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
