import React from 'react';

import Header from './shared/Header';
import NannyCard from './components/nanny/NannyCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-register btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
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
