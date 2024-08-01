// Packages
import React from "react";

// Interfaces
interface InputProps {
  name: string;
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Component
const Input: React.FC<InputProps> = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label className="block text-start text-sm font-medium text-gray-500">{label}</label>
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full mt-2 p-2 bg-gray-50 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
};

export default Input;
