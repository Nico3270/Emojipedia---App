import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  const emojisObjects = emojipedia.map(emoji => (
    <Card
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    description={emoji.meaning}
    />
    ));
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emojisObjects}
      </dl>
    </div>
  );
}

export default App;
