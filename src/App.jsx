import React from 'react';

import './App.css';
import Header from './shared/Header';
import NannyCard from './components/nanny/NannyCard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <section id="nannyListing">
          <h1 className="page-title">Your Trusted Nanny Away From Home</h1>
          <div className="row">
            <NannyCard />
            <NannyCard />
            <NannyCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
