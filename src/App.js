import React, { useState } from "react";
import Input from "./Input";

const App = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
  });

  // Event handler for input changes
  const changehandler = (event) => {
    // Update the form data state by spreading the existing state and updating the specific field
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Event handler for form submission
  const submithandler = (event) => {
    event.preventDefault();
    // Log the form data to the console
    console.log("firstname", formData.name);
    console.log("email", formData.email);
    console.log("mobile", formData.mobilenumber);
  };

  return (
    <>
      <h1 className="text-center text-black-200 text-[1.5rem] py-5 font-bold">
        Reusable forms
      </h1>

      <form onSubmit={submithandler} className="flex flex-col items-center">
        {/* Input field for name */}
        <Input
          type="text"
          value={formData.name}
          placeholder="firstname"
          onChange={changehandler}
          name="name"
        />

        {/* Input field for email */}
        <Input
          type="email"
          value={formData.email}
          placeholder="email"
          onChange={changehandler}
          name="email"
        />

        {/* Input field for mobile number */}
        <Input
          type="text"
          value={formData.mobilenumber}
          placeholder="mobilenumber"
          onChange={changehandler}
          name="mobilenumber"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="py-2 px-5 bg-red-500 text-white text-center mt-4"
        >
          Click Me
        </button>
      </form>
    </>
  );
};

export default App;
