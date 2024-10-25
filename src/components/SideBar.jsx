import React, { useContext, useRef } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const SideBar = () => {
  // const [extended, ser]
  const {
    categoriesArray,
    setCategoriesArray,
    setSelectedCategory,
    extended,
    randomCategories,
    index,
    setLoading,
  } = useContext(Context);

  return (
    <div className="fixed z-30 mt-12 hidden overflow-x-scroll border-black/20 bg-white px-4 pt-3 dark:border-white/20 dark:bg-black dark:text-white md:overflow-hidden lg:block lg:h-screen lg:w-fit">
      <div className="mb-5 flex flex-col gap-2">
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
                ? "selected"
                : "flex items-center gap-3 rounded-xl bg-black/10 px-3 py-3 text-base hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 md:bg-transparent dark:md:bg-transparent"
            }
          >
            <span className="text-2xl">{icon}</span>
            {extended && <span className="mr-5">{name}</span>}
          </Link>
        ))}
      </div>

      <p className="absolute bottom-0">
        {/* Copyright {new Date().getFullYear()} GLtube. */}
      </p>
    </div>
  );
};

export default SideBar;
