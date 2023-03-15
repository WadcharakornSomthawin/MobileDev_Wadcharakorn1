import React from "react";

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?hote&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Hotel</h1>
          <h2>1,500 hotel</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?appartments&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Appartments</h1>
          <h2>500 appartments</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?resorts&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Resorts</h1>
          <h2>500 resorts</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?villas&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Villas</h1>
          <h2>300 villas</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?cabin&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Cabin</h1>
          <h2>250 cabin</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
