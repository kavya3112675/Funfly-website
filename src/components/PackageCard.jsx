
import React from "react";

function PackageCard(props) {
  const item = props.packageData;

  return (
    <div className="package-card">
      <div className="package-image">
        <img src={item.image} alt={item.name} />
        <span className="package-category">{item.category}</span>
      </div>

      <div className="package-content">
        <h3>{item.name}</h3>
        <p className="package-route">📍 {item.route}</p>
        <p className="package-days">◷ {item.days}</p>

        <div className="package-bottom">
          <h3>{item.price}</h3>
          <button onClick={() => props.onEnquire(item)}>
            Enquire Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
