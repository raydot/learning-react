//095_array_of_recipes_instructions.js
import React from 'react';
// import ReactDOM from 'react-dom';

const Instructions = ({ title, steps }) =>
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((s, i) =>
      <p key={i}>{s}</p>
    )}
  </section>

export default Instructions