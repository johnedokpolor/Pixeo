import { createContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { categories } from "../utils/constants";

export const Context = createContext();

const ContextProvider = (props) => {
  const [dark, setDark] = useState(
    localStorage.getItem("dark")
      ? JSON.parse(localStorage.getItem("dark"))
      : false,
  );
  const randomCategories = [
    "cypto",
    "music",
    "trailer",
    "gaming",
    "food",
    "coding",
    "anime",
    "news",
    "comedy",
    "movie",
  ];
  const index = Math.floor(Math.random() * (categories.length - 1));
  const [categoriesArray, setCategoriesArray] = useState(categories);
  const [selectedCategory, setSelectedCategory] = useState(
    randomCategories[index],
  );
  const [extended, setExtended] = useState(false);
  const [search, setSearch] = useState(false);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  const valueConverter = (value) => {
    if (value >= 1000000000) {
      return Math.floor(value / 1000000000) + "B";
    } else if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  const subConverter = (value) => {
    if (value >= 1000000) {
      return value / 1000000 + "M";
    } else if (value >= 1000) {
      return value / 1000 + "K";
    } else {
      return value;
    }
  };
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  const contextValue = {
    dark,
    setDark,
    categoriesArray,
    setCategoriesArray,
    selectedCategory,
    setSelectedCategory,
    extended,
    setExtended,
    valueConverter,
    randomCategories,
    index,
    subConverter,
    search,
    setSearch,
    response,
    setResponse,
    loading,
    setLoading,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
