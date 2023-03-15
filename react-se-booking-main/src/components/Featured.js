import React from "react";

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
      <img
        src="https://source.unsplash.com/500x500/?rome&sig=1"
        className="featuredImg"
      />
      <div className="featuredTitle">
        <h1>Rome</h1>
        <h2>2,500 properties</h2>
      </div>
    </div>
    <div className="featuredItem">
      <img
        src="https://source.unsplash.com/500x500/?maldives&sig=1"
        className="featuredImg"
      />
      <div className="featuredTitle">
        <h1>Maldives</h1>
        <h2>2,000 properties</h2>
      </div>
    </div>
    <div className="featuredItem">
      <img
        src="https://source.unsplash.com/500x500/?osaka&sig=1"
        className="featuredImg"
      />
      <div className="featuredTitle">
        <h1>Osaka</h1>
        <h2>1,500 properties</h2>
      </div>
    </div>
    <div className="featuredItem">
      <img
        src="https://source.unsplash.com/500x500/?tromso&sig=1"
        className="featuredImg"
      />
      <div className="featuredTitle">
        <h1>Tromso</h1>
        <h2>1,500 properties</h2>
      </div>
    </div>
  </div>
  );
};

export default Featured;
