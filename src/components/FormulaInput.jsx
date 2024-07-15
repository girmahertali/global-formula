import React, { useState } from "react";
import { useAutocomplete } from "../api/autocomplete";
import { calculateFormula } from "../utils/calculate";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import "./FormulaInput.css";

const FormulaInput = ({ formula, onUpdate, onRemove }) => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(true);
  const { data: suggestions } = useAutocomplete(inputValue);

  const handleChangeTitle = (e) => {
    const updatedFormula = { ...formula, title: e.target.value };
    onUpdate(formula.id, updatedFormula);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectSuggestion = (suggestion) => {
    const updatedFormula = {
      ...formula,
      parts: [...formula.parts, suggestion],
    };
    onUpdate(formula.id, updatedFormula);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const updatedFormula = {
        ...formula,
        parts: [...formula.parts, inputValue.trim()],
      };
      onUpdate(formula.id, updatedFormula);
      // setInputValue("");
    }
  };

  const handleDeletePart = (index) => {
    const updatedFormula = {
      ...formula,
      parts: formula.parts.filter((_, i) => i !== index),
    };
    onUpdate(formula.id, updatedFormula);
  };

  const handleUpdatePart = (index, newValue) => {
    const updatedFormula = {
      ...formula,
      parts: formula.parts.map((part, i) => (i === index ? newValue : part)),
    };
    onUpdate(formula.id, updatedFormula);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleAddSegment = () => {
    const updatedFormula = { ...formula, parts: [...formula.parts, ""] };
    onUpdate(formula.id, updatedFormula);
  };

  const results = calculateFormula(formula.parts);

  return (
    <div className="box">
      <div className="header_title">
        <div className="toggle" onClick={handleToggle}>
          {!toggle ? <FaCaretRight /> : <FaCaretDown />}
        </div>
        <input
          type="text"
          value={formula.title}
          onChange={handleChangeTitle}
          placeholder="Type your Title..."
          className="title"
        />
        <button
          className="remove-formula-button"
          onClick={() => onRemove(formula.id)}
        >
          x
        </button>
      </div>
      {toggle && (
        <div>
          {formula.parts.map((part, index) => (
            <div key={index} className="formula-segment">
              <div className="result">{results[index]}</div>
              <div className="formula-input">
                <input
                  className="segmentInput"
                  type="text"
                  value={part}
                  onChange={(e) => handleUpdatePart(index, e.target.value)}
                />
                <button onClick={() => handleDeletePart(index)}>x</button>
              </div>
            </div>
          ))}
          <button className="add-segment-button" onClick={handleAddSegment}>
            Add Segment
          </button>
        </div>
      )}
    </div>
  );
};

export default FormulaInput;
