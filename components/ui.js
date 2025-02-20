// components/ui.js
import React from "react";

export const Button = ({ children, onClick }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
    {children}
  </button>
);

export const Card = ({ children }) => (
  <div className="p-4 shadow-md rounded-md bg-white">
    {children}
  </div>
);

export const Input = ({ placeholder, value, onChange }) => (
  <input
    className="border rounded-md p-2 w-full"
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
