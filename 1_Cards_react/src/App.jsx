import "./App.css";
import Card from "./card";
import cardData from "./list";

function App() {

  return (
    <div className="cards-container">
      {cardData.map((iterable, idx) => (
        <Card
          key={idx}
          title={iterable.title}
          description={iterable.description}
        />
      ))}
    </div>
  );
}

export default App;
