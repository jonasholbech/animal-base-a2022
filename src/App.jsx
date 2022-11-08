import { useState } from "react";
import { getCleanData } from "./data";
import Animal from "./Animal";
const animals = getCleanData();
function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  function sayHi(msg) {
    console.log(msg);
  }
  let filtered = animals;
  filtered.sort((a, b) => {
    if (a[sort] > b[sort]) {
      return 1;
    }
    if (a[sort] < b[sort]) {
      return -1;
    }
    return 0;
  });
  if (filter) {
    filtered = animals.filter((ani) => ani.type === filter);
  }

  return (
    <div className="App">
      <fieldset>
        <legend>Filters</legend>
        <button
          className={filter === "dog" ? "active" : null}
          onClick={() => setFilter("dog")}
        >
          Dog
        </button>
        <button
          className={filter === "cat" ? "active" : null}
          onClick={() => setFilter("cat")}
        >
          Cat
        </button>
        <button
          className={filter === "dragon" ? "active" : null}
          onClick={() => setFilter("dragon")}
        >
          dragon
        </button>
        <button
          className={filter === "horse" ? "active" : null}
          onClick={() => setFilter("horse")}
        >
          horse
        </button>
      </fieldset>
      <fieldset>
        <legend>Sort</legend>
        <button onClick={() => setSort("name")}>Dog</button>
        <button onClick={() => setSort("age")}>Age</button>
        <button onClick={() => setSort("type")}>Type</button>
        <button onClick={() => setSort("description")}>Desc</button>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
            <th>Description</th>
            <th>Greet</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => {
            return <Animal {...ani} sayHi={sayHi} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
