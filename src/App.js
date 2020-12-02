import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "faire une fiche projet vm",
      completed: false,
    },
    {
      text: "envoyer odj avec bettina",
      completed: false,
    },
    {
      text: "consolider synthèse projets",
      completed: false,
    },
    {
      text: "envoyer les fiches demandes ordis",
      completed: false,
    },
  ]);

  return (
    <div>
      {todos.map(({ text, completed }) => (
        <div>
          <p>{text}</p>
          <p>{completed}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
