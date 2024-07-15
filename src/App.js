// src/App.js
import React, { useState } from "react";
import FormulaInput from "./components/FormulaInput";
import "./App.css";

const App = () => {
  const [formulas, setFormulas] = useState([]);

  const handleAddFormula = () => {
    setFormulas([
      ...formulas,
      { id: Date.now(), title: `New Formula`, parts: [] },
    ]);
  };

  const handleUpdateFormula = (id, updatedFormula) => {
    setFormulas(
      formulas.map((formula) => (formula.id === id ? updatedFormula : formula))
    );
  };

  const handleRemoveFormula = (id) => {
    setFormulas(formulas.filter((formula) => formula.id !== id));
  };

  return (
    <div className="app-container">
      <div className="formula_header">
        <h1 className="main-title">Formulas ({formulas.length})</h1>
        <button className="add-formula-button" onClick={handleAddFormula}>
          +
        </button>
      </div>
      {formulas.map((formula, index) => (
        <FormulaInput
          key={formula.id}
          formula={formula}
          onUpdate={handleUpdateFormula}
          onRemove={handleRemoveFormula}
        />
      ))}
    </div>
  );
};

export default App;
