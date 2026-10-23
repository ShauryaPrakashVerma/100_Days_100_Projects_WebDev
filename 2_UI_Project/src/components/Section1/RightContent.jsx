import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="right-marquee h-full w-2/3 p-6">
      <div className="right-marquee__track">
        {[false, true].map((isDuplicate) => (
          <div
            className="right-marquee__group"
            key={isDuplicate ? "duplicate" : "original"}
            aria-hidden={isDuplicate || undefined}
          >
            {props.users.map((elem, idx) => (
              <RightCard
                key={idx}
                color={elem.color}
                id={idx}
                img={elem.img}
                tag={elem.tag}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightContent;
