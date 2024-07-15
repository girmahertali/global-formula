// src/utils/calculate.js
// export const calculateFormula = (formulaParts) => {
//   // Define dummy variable values
//   const variables = {
//     x: 10,
//     y: 5,
//   };

//   // Replace variables in the formula with their values
//   const formulaString = formulaParts
//     .map((part) => variables[part] || part)
//     .join(" ");

//   try {
//     // Evaluate the formula string safely
//     // Note: Use a safe evaluation method for production code
//     const result = eval(formulaString);
//     return result;
//   } catch (error) {
//     console.error("Error calculating formula:", error);
//     return "Error";
//   }
// };
// utils/calculate.js

export const calculateFormula = (parts) => {
  const results = parts.map((part) => {
    // Logic to calculate result for each part
    // Example logic (you should replace this with your actual calculation logic):
    const calculatedResult = evaluate(part); // Replace evaluate with your actual calculation function
    return calculatedResult;
  });

  return results;
};

// Replace evaluate with your actual calculation logic function
const evaluate = (part) => {
  // Implement your calculation logic here
  // Example:
  try {
    return eval(part); // Replace with your own safe evaluation method
  } catch (error) {
    return "Error"; // Handle errors appropriately
  }
};
