import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Context } from "../context/Context";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import UserDetails from "./UserDetails";
import Logo from "../assets/pixeologo.jpg";

const Navbar = () => {
  const {
    dark,
    setDark,
    setExtended,
    categoriesArray,
    setCategoriesArray,
    setSelectedCategory,
    randomCategories,
    index,
    search,
    setSearch,
    setLoading,
  } = useContext(Context);
  return (
    <div className="fixed z-50 mb-5 w-screen bg-white px-2 pt-2 dark:bg-black dark:text-white lg:px-5 lg:pt-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            onClick={() => setExtended((prev) => !prev)}
            className="hidden rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/20 lg:flex lg:cursor-pointer"
          >
            <RiMenu2Fill className="text-2xl" />
          </div>
          {search ? (
            <IoIosArrowRoundBack
              onClick={() => setSearch(false)}
              className="text-4xl"
            />
          ) : (
            <img className="w-12 rounded-full" src={Logo} alt="PixeoLogo" />
          )}
        </div>
        <div className="hidden lg:block">
          <SearchBar />
        </div>
        {search && (
          <div className="block lg:hidden">
            <SearchBar />
          </div>
        )}

        {!search && (
          <div className="flex items-center gap-5">
            <FaSearch
              onClick={() => setSearch(true)}
              className="text-xl text-black dark:text-white lg:hidden"
            />

            <div
              className="text-xl md:cursor-pointer"
              onClick={() => setDark((prev) => !prev)}
            >
              {dark ? <FaSun /> : <FaMoon />}
            </div>
            <UserDetails />
          </div>
        )}
      </div>
      <div className="mb-1 flex w-full justify-between gap-3 overflow-x-scroll py-3 lg:hidden">
        {categoriesArray.map(({ id, selected, icon, name }) => (
          <Link
            to={`/search/${name}`}
            key={id}
            onClick={(e) => {
              setLoading(true);

              name === "Home"
                ? setSelectedCategory(randomCategories[index])
                : setSelectedCategory(name);
              setCategoriesArray((prev) =>
                prev.map((item) => ({ ...item, selected: false })),
              );
              setCategoriesArray((prev) =>
                prev.map((item) =>
                  item.id === id ? { ...item, selected: !item.selected } : item,
                ),
              );
            }}
            className={
              selected
                ? "selected text-sm"
                : "flex items-center gap-3 rounded-xl bg-black/10 px-3 py-2 text-sm hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
            }
          >
            <span className="text-2xl">{icon}</span>
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
