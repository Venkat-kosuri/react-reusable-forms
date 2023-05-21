import React from "react";

const Input = ({ value, name, onChange }) => {
  return (
    <>
      <label className="text-[1rem]  font-sans text-black-500  text-center">
        {name}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-[500px] border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 block text-center my-2"
      />
    </>
  );
};

export default Input;
