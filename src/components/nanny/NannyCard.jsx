import React from 'react';

function NannyCard() {
  return (
    <div className="col-md-3 col-xs-6">
      <div className="card rpn-card">
        <img
          className="card-img-top"
          src="http://via.placeholder.com/350x250"
          alt=""
        />
        <div className="card-block">
          <h6 className="card-subtitle">Janice Griffith</h6>
          <h4 className="card-title">Some nice apartment</h4>
          <p className="card-text">$240 per Night &#183; Free Cancelation</p>
          <a href="#" className="card-link">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}

export default NannyCard;
