/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
export default function Header({ title, handleAddButton, handleOnChange }) {
  return (
    <div className=" bg-white-200 ">
      <div className=" p-8 flex flex-row justify-between">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex">
          <div className="flex content-center items-center bg-gray-100">
            <input
              className="bg-gray-100"
              type="text"
              placeholder="Search"
              onChange={handleOnChange}
            />
            <BsSearch className="cursor-pointer" />
          </div>
          <button
            className=" text-white font-bold px-2 py-1  bg-blue-600 rounded-full hover:bg-blue-900"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
