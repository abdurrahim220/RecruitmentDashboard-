import React from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <>
      <div className="flex justify-between gap-5 ">
        <h1>Good Morning</h1>
        <div>
          <input type="text" placeholder="Search" className="px-3 py-1" />
          <button>
            <CiSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
