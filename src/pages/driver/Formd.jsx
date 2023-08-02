//import { useState } from "react";

import { useState } from "react";

//import Driver from "./Driver";

function Formd() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(event) {
    if (name == "") {
      setError("Required");
    }
    console.log(event);
  }
  return (
    <form
      className="max-w-md mx-auto p-6 border rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      {error && <p className="text-red-300">{error}</p>}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 mb-2 font-bold text-sm"
        >
          Name:
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="CNIC"
          className="block text-gray-700 mb-2 font-bold text-sm"
        >
          CNIC:
        </label>
        <input
          type="text"
          placeholder="Enter CNIC"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="Licence"
          className="block text-gray-700 mb-2 font-bold text-sm"
        >
          Licence:
        </label>
        <input
          type="text"
          placeholder="XXXXXXX"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="flex flex-row-reverse mb-4">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 font-bold rounded-full py-1 px-2 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Formd;
