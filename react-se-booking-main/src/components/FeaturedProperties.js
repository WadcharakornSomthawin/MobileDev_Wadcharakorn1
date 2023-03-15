import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/500x500/?resort&sig=1"
          className="fpImg"
        />
        <div className="fpTitle">
          <h1>The Mooring Resort</h1>
          <h2 className="h2-1">Puket Thailand</h2>
          <h2>Starting from $30</h2>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/500x500/?villa&sig=1"
          className="fpImg"
        />
        <div className="fpTitle">
          <h1>Stay Wellbeing & Lifestyle</h1>
          <h2 className="h2-1">Puket Thailand</h2>
          <h2>Starting from $45</h2>
          <div className="fpRating">
            <button>6.8</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/500x500/?Cabin&sig=1"
          className="fpImg"
        />
        <div className="fpTitle">
          <h1>The Kee Resort & Spa</h1>
          <h2 className="h2-1">Puket Thailand</h2>
          <h2>Starting from $20</h2>
          <div className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/500x500/?appartment&sig=1"
          className="fpImg"
        />
        <div className="fpTitle">
          <h1>Coconut Lane Bangkok</h1>
          <h2 className="h2-1">Bangkok Thailand</h2>
          <h2>Starting from $30</h2>
          <div className="fpRating">
            <button>6.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
