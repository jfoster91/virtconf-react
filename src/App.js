import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme';


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Quote from './components/Quote';
import Why from './components/Why';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <div>
        <Header />
        <Hero />
        <About />
        <Quote />
        <Why />
        <Contact />
        <Footer />
      </div>  
    </ThemeProvider>
  )
}

export default App;
