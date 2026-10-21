import "./card.css";
import { PiPencilSimple } from "react-icons/pi";
import heroImg from "./assets/hero.png";

const Card = function Card(iterable) {
  return (
    <div className="body">
      <div className="top">
        <img src={heroImg} alt="hello" />
        <button>
          <PiPencilSimple />
        </button>
      </div>

      <div className="middle">
        <h3>{ iterable.title}</h3>
        <p>
          {iterable.description}
        </p>
      </div>
      <div className="bottom">
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
