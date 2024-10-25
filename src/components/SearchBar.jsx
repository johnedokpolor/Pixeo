import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();
  const { setLoading } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between rounded-2xl border border-gray-300 md:w-[600px]"
    >
      <input
        className="bg-transparent px-3 py-1 outline-none md:w-[500px] lg:py-2"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
      />
      <button className="rounded-r-2xl border-l-[1px] border-gray-300 bg-black/10 px-1 py-2 text-2xl dark:bg-white/10 md:cursor-pointer lg:px-5">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
