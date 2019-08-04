import React from 'react';

function NannyCard() {
  return (
    <div className="col-md-3 col-xs-6">
      <div className="card rpn-card">
        <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="" />
        <div className="card-block">
          <h6 className="card-subtitle">Naples, FL</h6>
          <h4 className="card-title">Rebecca Boyce</h4>
          <p className="card-text">4.5 Stars</p>
          <button type="button" className="card-link button-link">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default NannyCard;
