import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing;

  return (
    <div className=" flex flex-col border bg-amber-600 rounded-2xl p-4 ">
      {/* card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h1 className="text-3xl">${price}</h1>
          </div>
          {/* card body */}
          <div className="flex-1 bg-amber-400 rounded-xl p-3 mt-7">
              <p>{description}</p>
              {
                  features.map((feature, index) => <PricingFeature feature={feature} key={index}></PricingFeature>)
              }
          </div>
          <button className="btn  w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
