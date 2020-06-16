import React from "react";
export const Lists = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      {arrNumber.map((num) => {
        return <li key={num.toString()}>{num}</li>;
      })}
    </div>
  );
};
