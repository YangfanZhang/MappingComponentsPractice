import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(item) {
  return (
    <Entry
      key={item.id}
      name={item.name}
      emoji={item.emoji}
      meaning={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
